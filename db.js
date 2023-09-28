const mysql = require('mysql2')
require("dotenv").config();

const urlDB = `mysql://${process.env.MYSQLUSER}:${process.env.MYSQLPASSWORD}@${MYSQLHOST}:${MYSQLPORT}/${MYSQLDATABASE}`
// const urlDB = `mysql://${process.env.MYSQLUSER}:${process.env.MYSQLPASSWORD}@${process.env.MYSQLHOST}:${process.env.MYSQLPORT}/${process.env.MYSQLDATABASE}`
// mysql://root:ehT9oP2bWwmz6XzmzRiC@containers-us-west-106.railway.app:5962/railway
const pool = mysql.createPool(
  // user: process.env.DB_USERNAME,
  // password:process.env.DB_PASSWORD,
  // host: process.env.DB_HOST,
  // port: process.env.DB_PORT,
  // database: process.env.DATABASE,
  urlDB

)

module.exports = pool
