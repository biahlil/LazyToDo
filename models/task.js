const mongoose = require('mongoose');

// Definisi Skema
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Membuat model Task berdasarkan skema
const Task = mongoose.model('Task', taskSchema);

// Mengekspor model untuk digunakan di file lain
module.exports = Task;