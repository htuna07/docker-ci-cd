const express = require("express");
const app = express();

app.use(require("body-parser").json());

app.get("/test", (req, res) => {
  console.log("Request is received.");
});

app.listen(3000, () => console.log("Listening on port 3000"));
