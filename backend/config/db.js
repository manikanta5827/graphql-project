const mongoose = require('mongoose');
require('dotenv').config();
const DB_URL = process.env.DB_URL;
function connect() {
  try {
    mongoose.connect(DB_URL);

    const connection = mongoose.connection;

    connection.on('connected', () => console.log('connection connected'));
  } catch (error) {
    console.log('connection error');
  }
}

module.exports = { connect };
