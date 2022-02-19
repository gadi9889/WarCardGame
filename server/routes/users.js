require("dotenv").config();
let con = require("../config/database");

const router = require("express").Router();

router.get("/", (req, res) => {
  con.connect((err) => {
    if (err) {
      return res.status(500).send();
    }
    let sql = "SELECT * FROM users";
    con.query(sql, (err, result) => {
      if (err) {
        return res.status(500).send();
      }
      res.json(result);
    });
  });
});

router.post("/signup", async (req, res) => {
  con.connect((err) => {
    if (err) {
      return res.status(500).send();
    }
    let sql = `INSERT INTO users (kingdom_name, password) VALUES ('${req.body.name}', '${req.body.password}')`;
    con.query(sql, (err, result) => {
      if (err) {
        return res.status(400).send();
      }
      sql = `INSERT INTO kingdoms (points,region_name,name) VALUES (0,'${req.body.region}','${req.body.name}')`;
      con.query(sql, (err, result) => {
        if (err) {
          return res.status(500).send();
        }
        res.status(201).json(result);
      });
    });
  });
});

router.post("/login", (req, res) => {
  con.connect((err) => {
    if (err) {
      return res.status(500).send();
    }
    let sql = "SELECT * FROM users";
    con.query(sql, (err, result) => {
      if (err) {
        return res.status(500).send();
      }
      for (let i = 0; i < result.length; i++) {
        let user = result[i];
        if (user.kingdom_name == req.body.name) {
          if (user.password == req.body.password) {
            return res.status(200).json({ Message: "login successful" });
          } else {
            return res.status(404).json({ Message: "incorrect password" });
          }
        }
      }
      res.status(404).json({ Message: "user not found" });
    });
  });
});

module.exports = router;
