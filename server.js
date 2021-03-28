// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT = process.env.PORT || 8080;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const morgan = require('morgan');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
});

/*-------------------------------------------------*/

app.get('/', (req, res) => {
  res.render('home')
})