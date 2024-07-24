require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// console.log(__dirname);

// const fs = require('fs');
// const { log } = require('console');
// fs.mkdir('./test', { recursive: true }, (err, path) => {
//   if (err) return console.log(err.message);
//   console.log(path);
// })

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static('static'));

app.use('/api/cards', require('./routes/cardsRoutes'));
app.use('/api/users', require('./routes/usersRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));

const { PORT } = process.env;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server is listening for requests on http://127.0.0.1:${PORT}`))
});