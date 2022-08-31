import UserStorage from "./UserStorage.js";

class User {
  constructor(body) {
    this.body = body;
  }
  async login() {
    try {
      const user = await UserStorage.getUserInfo(this.body.id);
      console.log(user);
      if (user === undefined) {
        return {
          result: "fail",
          message: "wrong id",
        };
      }
      if (user.password === this.body.pw) {
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
    } catch (err) {
      return { success: false, msg: err };
    }
  }
  async register() {
    try {
      const response = await UserStorage.save(this.body);
      if (response === undefined) {
        return {
          result: "fail",
          message: "save fail",
        };
      } else if (!response.success) {
        return {
          result: "fail",
          message: "id already exist",
        };
      } else if (response.success) {
        return {
          result: "success",
          message: "save success",
        };
      }
    } catch (err) {
      return { success: false, msg: err };
    }
  }
}

export default User;
