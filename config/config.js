const mongoose = require('mongoose');
const uri = "mongodb+srv://biahlilakbar1:W4DrSIuaph69JS3A@cluster0.ja84rev.mongodb.net/?retryWrites=true&w=majority";
const db = mongoose.connection;

mongoose.connect(uri, {
}).then(() => {
  console.log("Connected to DB!");
}).catch((error) => {
  console.log("could not connect");
});

db.on('error', (error) => {
  console.error('Koneksi MongoDB gagal:', error);
});

db.on('connected', () => {
  console.log('Terhubung ke MongoDB Atlas!');
});

db.on('disconnected', () => {
  console.log('Koneksi MongoDB terputus.');
});

// Pemantauan perubahan status koneksi
setInterval(() => {
  const state = mongoose.connection.readyState;
  console.log('Status Koneksi MongoDB:', state === 1 ? 'Terhubung' : 'Tidak Terhubung');
}, 5000);