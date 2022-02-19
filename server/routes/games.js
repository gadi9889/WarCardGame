const con = require("../config/database");

require("dotenv").config();

const router = require("express").Router();

router.get("/kingdoms", (req, res) => {
  con.connect((err) => {
    if (err) {
      return res.status(500).send();
    }
    let sql = `SELECT name,region_name,points FROM kingdoms ORDER BY points DESC`;
    con.query(sql, (err, result) => {
      if (err) {
        return res.status(500).send();
      }
      res.json(result);
    });
  });
});

router.get("/regions", (req, res) => {
  sql = `SELECT name,color,points FROM regions ORDER BY points DESC`;
  con.query(sql, (err, result) => {
    if (err) {
      return res.status(500).send();
    }
    res.json(result);
  });
});

router.post("/win", (req, res) => {
  con.connect((err) => {
    if (err) {
      return res.status(500).send();
    }
    let sql = `UPDATE kingdoms SET points=points+10 WHERE name='${req.body.name}'`;
    con.query(sql, (err, result) => {
      if (err) {
        return res.status(500).send();
      }
      sql = `UPDATE regions SET points=points+10 WHERE name=(SELECT region_name FROM kingdoms WHERE name='${req.body.name}')`;
      con.query(sql, (err, result) => {
        if (err) {
          return res.status(500).send();
        }
        res.send({ Message: "Win updated" });
      });
    });
  });
});

router.post("/loss", (req, res) => {
  con.connect((err) => {
    if (err) {
      return res.status(500).send();
    }
    let sql = `SELECT points FROM kingdoms WHERE name='${req.body.name}'`;
    con.query(sql, (err, result) => {
      if (err) {
        return res.status(500).send();
      }
      let sql;
      if (result[0].points < 10) {
        sql = `UPDATE kingdoms SET points=0 WHERE name='${req.body.name}'`;
      } else {
        sql = `UPDATE kingdoms SET points=points-10 WHERE name='${req.body.name}'`;
      }
      con.query(sql, (err, result) => {
        if (err) {
          return res.status(500).send();
        }
        sql = `SELECT points FROM regions WHERE name=(SELECT region_name FROM kingdoms WHERE name='${req.body.name}')`;
        con.query(sql, (err, result) => {
          if (err) {
            return res.status(500).send();
          }
          if (result[0].points < 10) {
            sql = `UPDATE regions SET points=0 WHERE name=(SELECT region_name FROM kingdoms WHERE name='${req.body.name}')`;
          } else {
            sql = `UPDATE regions SET points=points-10 WHERE name=(SELECT region_name FROM kingdoms WHERE name='${req.body.name}')`;
          }
          con.query(sql, (err, result) => {
            if (err) {
              return res.status(500).send();
            }
            res.send({ Message: "Loss updated" });
          });
        });
      });
    });
  });
});

module.exports = router;
