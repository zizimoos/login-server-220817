import User from "../M/memory/User.js";

const render = {
  home: (req, res) => {
    res.render("index");
  },
  login: (req, res) => {
    res.render("login");
  },
  register: (req, res) => {
    res.render("register");
  },
};
const process = {
  login: (req, res) => {
    const users = new User(req.body);
    const response = users.login();
    return res.json(response);
  },
  register: (req, res) => {
    const user = new User(req.body);
    const response = user.register();
    return res.json(response);
  },
};

export default { render, process };
