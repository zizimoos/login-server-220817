import User from "../M/memory/User.js";

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
    const users = new User(req.body);
    const response = users.login();
    return res.json(response);
  },
};

export default { render, process };
