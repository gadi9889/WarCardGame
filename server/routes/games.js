const con = require('../config/database');

require('dotenv').config()

const router = require('express').Router()

router.post('/win',(req,res) => {
    con.connect((err) => {
        if (err) throw err;
        console.log("Connected!");
        var sql = `UPDATE kingdoms SET points=points+10 WHERE name='${req.body.name}'`;
        con.query(sql, (err, result) => {
          if (err) throw err;
          res.send({Message:'Win updated'})
        });
    });
})

router.post('/loss',(req,res) => {
    con.connect((err) => {
        if (err) throw err;
        console.log("Connected!");
        // SELECT points FROM kingdoms WHERE name='Akkadian';
        let sql = `SELECT points FROM kingdoms WHERE name='${req.body.name}'`
        con.query(sql, (err, result) => {
            if (err) throw err;
            let sql
            if (result[0].points <10) {
                sql = `UPDATE kingdoms SET points=0 WHERE name='${req.body.name}'`;
            } else {
                sql = `UPDATE kingdoms SET points=points-10 WHERE name='${req.body.name}'`;
            }
            con.query(sql, (err,result) => {
                if (err) throw err
                res.send({Message:'loss updated'})
            })
        });
    });
})

module.exports = router