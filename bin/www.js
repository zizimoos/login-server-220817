import ip from "ip";

import app from "../src/index.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(` 🟢 Server is running on port ${ip.address()} : ${PORT} `);
});
