// routers/index.js
const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.get("/", (req, res) => {
  res.send("Welcome to the homepage");
});
router.get("/about", (req, res) => {
  res.send("About page");
});

router.get("/task", taskController.getAllTask);
router.get("/task/add", taskController.addTask);
router.get("/task/:taskTitle", taskController.findTaskByTitle);
router.get("/task/update/:taskTitle", taskController.updateTask);
router.get("/task/delete/:taskTitle", taskController.deleteTask);
router.get("/task/mark/:taskTitle", taskController.completeTask);

module.exports = router;
