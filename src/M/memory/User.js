import UserStorage from "./UserStorage.js";

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const user = UserStorage.getUserInfo(this.body.id);
    if (user === undefined) {
      return {
        result: "fail",
        message: "wrong id",
      };
    }
    if (user.psword === this.body.pw) {
      return {
        result: "success",
        message: " login success",
      };
    } else {
      return {
        result: "fail",
        message: "wrong password",
      };
    }
  }
}

export default User;
