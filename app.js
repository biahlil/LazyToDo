const express = require("express");
const app = express();
const router = require("./routers/index.js");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
