let mysql = require('mysql2');

let con = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    database:"warcardgame"
});
  
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = con