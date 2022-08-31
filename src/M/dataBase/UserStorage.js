import database from "./config/database.js";

class UserStorage {
  static async getUsers(...args) {
    const users = await fs
      .readFile("./src/M/fileSystem/databases/users.json")
      .then((data) => {
        return JSON.parse(data);
      })
      .catch(console.error);
    console.log("users", users);
    const newUsers = args.reduce((newUsers, field) => {
      // console.log("newUsers", newUsers, "field", field);
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    console.log("return - newUsers", newUsers);
    return newUsers;
  }
  static async getUserInfo(id) {
    return new Promise((resolve, reject) => {
      database.query("SELECT * FROM users WHERE id = ?", [id], (err, data) => {
        if (err) reject(err);
        resolve(data[0]);
      });
    });
  }
  static async save(body) {
    const users = await fs
      .readFile("./src/M/fileSystem/databases/users.json")
      .then((data) => {
        return JSON.parse(data);
      })
      .catch(console.error);

    if (!users.id.includes(body.id)) {
      users.id.push(body.id);
      users.psword.push(body.pw);
      users.name.push(body.userName);
      const response = await fs
        .writeFile(
          "./src/M/fileSystem/databases/users.json",
          JSON.stringify(users)
        )
        .then(() => {
          return {
            success: true,
          };
        })
        .catch(console.error);
      return response;
    } else {
      return { success: false };
    }
  }
}

export default UserStorage;
