// routers/index.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the homepage");
});
router.get("/about", (req, res) => {
  res.send("About page");
});
router.get("/task/add", (req, res) => {
  res.send("Task Add");
});
router.get("/task/edit", (req, res) => {
  res.send("Task Edit");
});
router.get("/task/mark", (req, res) => {
  res.send("Task Mark Complete");
});
router.get("/task/delete", (req, res) => {
  res.send("Task delete");
});

module.exports = router;
