const Task = require("../models/task");
const { randFirstName, randFood } = require("@ngneat/falso");

class TaskController {
  // Create a new task
  static addTask(req, res) {
    //let { title, description } = req.body;
    let title = randFirstName();
    let description = randFood();
    const newTask = new Task({
      title: title,
      description: description,
    });
    newTask
      .save()
      .then((result) => {
        //let response = {
        //Task: {
        //title: result.title,
        //description: result.description,
        //},
        //};
        console.log(result);
        res.status(201).json(result);
      })
      .catch((err) => {
        //let handlerror = {
        //path: err.errors[0].path,
        //type: err.errors[0].type,
        //message: err.message,
        //};
        console.log(err);
        res.status(500).json(err);
      });
  }

  // Get all Task
  static getAllTask(req, res) {
    Task.find()
      .then((result) => {
        //let response = {
        //Task: {
        //title: result.title,
        //description: result.description,
        //},
        //};
        //console.log(result);
        //console.log(req);
        //console.log(res);
        res.status(200).json(result);
      })
      .catch((err) => {
        //let handlerror = {
        //path: err.errors[0].path,
        //type: err.errors[0].type,
        //message: err.message,
        //};
        console.log(err);
        res.status(500).json(err);
      });
  }

  static findTaskByTitle(req, res) {
    let taskTitle = req.params.taskTitle;
    Task.findOne({ title: taskTitle })
      .then((result) => {
        //let response = {
        //Task: {
        //title: result.title,
        //description: result.description,
        //},
        //};
        res.status(200).json(result);
      })
      .catch((err) => {
        //let handlerror = {
        //path: err.errors[0].path,
        //type: err.errors[0].type,
        //message: err.message,
        //};
        console.log(err);
        res.status(500).json(err);
      });
  }

  // Update a Task
  static updateTask(req, res) {
    let taskTitle = req.params.taskTitle;
    let title = randFirstName();
    let description = randFood();
    const update = { title: title, description: description };
    Task.findOneAndUpdate({ title: taskTitle }, update, { new: true })
      //[options.new=false] «Boolean» if true, return the modified document rather than the original
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }

  // Delete a task
  static deleteTask(req, res) {
    let taskTitle = req.params.taskTitle;
    Task.findOneAndDelete({ title: taskTitle })
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }

  // Mark complete a task
  static completeTask(req, res) {
    let taskTitle = req.params.taskTitle;
    const update = { completed: true };
    Task.findOneAndUpdate({ title: taskTitle }, update, { new: true })
      //[options.new=false] «Boolean» if true, return the modified document rather than the original
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  }
}

module.exports = TaskController;
