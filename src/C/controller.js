import User from "../M/dataBase/User.js";

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
  login: async (req, res) => {
    const users = new User(req.body);
    const response = await users.login();
    return res.json(response);
  },
  register: async (req, res) => {
    const user = new User(req.body);
    const response = await user.register();
    return res.json(response);
  },
};

export default { render, process };
