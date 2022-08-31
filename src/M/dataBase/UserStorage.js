import database from "./config/database.js";

class UserStorage {
  static async getUserInfo(id) {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM users WHERE id = ?`;
      database.query(query, [id], (err, data) => {
        if (err) reject(err);
        resolve(data[0]);
      });
    });
  }
  static async save(body) {
    return new Promise((resolve, reject) => {
      const query = `INSERT INTO users(id, name, password) VALUES(?,?,?)`;
      database.query(query, [body.id, body.userName, body.pw], (err, data) => {
        if (err) reject(`${err}`);
        resolve({
          success: true,
        });
      });
    });
  }
}

export default UserStorage;
