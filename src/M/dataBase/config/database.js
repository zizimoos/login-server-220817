import mysql from "mysql";

const database = mysql.createConnection({
  // host: "localhost",
  user: "root",
  password: "root",
  database: "login_lecture",
  host: process.env.DB_HOST,
  // user: process.env.DB_USER,
  // password: process.env.DB_PASSWORD,
  // database: process.env.DB_DATABASE,
});

database.connect(() => {
  console.log(" 🟢 connected to the database");
});

export default database;
