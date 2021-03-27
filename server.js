// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const express    = require("express");
const bodyParser = require("body-parser");
const app        = express();
const morgan     = require('morgan');

app.set('view engine', 'ejs');

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
});