const express = require("express")
const routes = express.Router()

routes.get("/users", (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM Users', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post("/signin", (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        console.log(req.body)
        conn.query('INSERT INTO Users set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)

           res.send("User created")
        })
    })
})

module.exports = routes