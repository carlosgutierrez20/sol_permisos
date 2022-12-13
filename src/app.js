const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || '3000'
const app = express();
const nodemailer = require('nodemailer');


app.set("port", PORT);

app.use(express.static('src'));
require('./spreadsheet');

var cons = require('consolidate');

app.engine('html', cons.swig)
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname, '/views')))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes

app.use(require('./routes/google.routes'));

module.exports = app;