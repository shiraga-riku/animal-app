const express = require("express");
const app  = express();
const userRouter = require("./routes/user");

const PORT = 3000;

app.get("/", (req, res) => {
  res.sendStatus(404)
});

// ルーティング
app.use("/user", userRouter);

app.listen(PORT, () => console.log("サーバーが起動しました。"));