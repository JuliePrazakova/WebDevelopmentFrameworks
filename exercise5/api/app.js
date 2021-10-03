const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const handlebars = require('express-handlebars');

const indexRouter = require('./routes/index');
const productsRouter = require('./routes/products');

const app = express();

app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
  extname: 'hbs',
  defaultLayout: 'layout',
  partialsDir: __dirname + '/views/partials/',
  layoutsDir: __dirname + '/views/layouts'
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/products', productsRouter);







module.exports = app;
