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
    console.log(req.body);
    return res.json({
      result: "success",
    });
  },
};

export default { render, process };
