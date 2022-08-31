import mysql from "mysql";

const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "login_lecture",
});

database.connect(() => {
  console.log(" 🟢 connected to the database");
});

export default database;
