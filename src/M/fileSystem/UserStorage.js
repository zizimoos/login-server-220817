import fs from "fs/promises";

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
    const users = await fs
      .readFile("./src/M/fileSystem/databases/users.json")
      .then((data) => {
        return JSON.parse(data);
      })
      .catch(console.error);
    const idx = users.id.indexOf(id);
    const userInfo = Object.keys(users).reduce((newUser, info) => {
      // console.log("getUserInfo-info", info);
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
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
