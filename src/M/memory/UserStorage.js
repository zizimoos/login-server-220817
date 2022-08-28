class UserStorage {
  static #users = {
    id: ["henry", "tessa", "james"],
    psword: ["1111", "2222", "3333"],
    name: ["헨리", "테사", "제임스"],
  };
  static getUsers(...args) {
    const users = this.#users;
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

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userInfo = Object.keys(users).reduce((newUser, info) => {
      // console.log("getUserInfo-info", info);
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  static save(body) {
    const users = this.#users;
    users.id.push(body.id);
    users.psword.push(body.pw);
    users.name.push(body.userName);
    console.log(users);
    return {
      success: true,
    };
  }
}

export default UserStorage;
