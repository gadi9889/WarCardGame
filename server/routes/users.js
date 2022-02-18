require('dotenv').config();
let con = require('../config/database');

const router = require('express').Router();

router.get('/',(req,res) => {
    con.connect((err) => {
        if(err) throw err;
        let sql = 'SELECT * FROM users';
        con.query(sql,(err,result) => {
            if (err) throw err;
            res.json(result);
        })
    })
})

router.post('/signup',(req,res) => {
    con.connect((err) => {
        if (err) throw err;
        let sql = `INSERT INTO users (kingdom_name, password) VALUES ('${req.body.name}', '${req.body.password}')`;
        con.query(sql, (err, result) => {
            if (err) throw err;
        });
        sql = `INSERT INTO kingdoms (points,region_name,name) VALUES (0,'${req.body.region}','${req.body.name}')`;
        con.query(sql, (err, result) => {
            if (err) throw err;
            res.status(201).json(result);
        });
    });
})

router.post('/login',(req,res) => {
    con.connect((err) => {
        if(err) throw err;
        let sql = 'SELECT * FROM users';
        con.query(sql,(err,result) => {
            if (err) throw err;
            for (let i = 0; i < result.length; i++) {
                const user = result[i];
                if (user.kingdom_name == req.body.name) {
                    if (user.password == req.body.password) {
                        res.status(200).json({Message:'login successful'})
                    } else {
                        res.status(404).json({Message:'incorrect password'})
                    }
                } else {
                    res.status(404).json({Message:'user not found'})
                }
            }
        })
    })
})

module.exports = router