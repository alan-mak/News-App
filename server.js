// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT = process.env.PORT || 8080;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const morgan = require('morgan');

app.set('views', './views')
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/images', express.static(__dirname, +'public/images'));
app.use('/scripts', express.static(__dirname, +'public/scripts'));
app.use('/stylesheets', express.static(__dirname, +'public/stylesheets'));

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
});


/*-------------------------------------------------*/

app.get('/', (req, res) => {
  const templateVars ={
    key: process.env.NEWS_API_KEY
  }
  res.render('home', templateVars)
})