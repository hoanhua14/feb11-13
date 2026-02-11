import express from "express";

const app = express();
const port = 3001;

app.listen(port, () => console.log(`running on ${port}`));

app.get("/", (req, res) => {
  res.send("running");
});
