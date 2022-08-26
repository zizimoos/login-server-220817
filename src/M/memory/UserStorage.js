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
}

export default UserStorage;
