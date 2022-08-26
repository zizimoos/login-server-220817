import UserStorage from "../M/memory/UserStorage.js";

const render = {
  home: (req, res) => {
    res.render("index");
  },
  login: (req, res) => {
    res.render("login");
  },
};
const process = {
  login: (req, res) => {
    const users = UserStorage.getUsers("id", "psword");
    console.log("controller - users", users);
    if (users.id.includes(req.body.id)) {
      const idx = users.id.indexOf(req.body.id);
      if (users.psword[idx] === req.body.pw) {
        return res.json({
          result: "success",
        });
      }
    }
    return res.json({
      result: "fail",
    });
  },
};

export default { render, process };
