const express = require('express');
const router = express.Router();

const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const passportHttp = require('passport-http');

const bodyParser = require('body-parser');
const core = require("express");

router.use(bodyParser.json());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});
passport.use(new passportHttp.BasicStrategy(function(username, password, done) {
  const userResult = users.find(user => user.username === username);
  if(userResult === undefined) {
    return done(null, false);
  }

  if(bcrypt.compareSync(password, userResult.password) === false)
  {
    return done(null, false);
  }

  done(null, userResult);

}));

//code for authentisation not working
  router.post('/', (req, res) => {
    res.redirect('/products');
  });

  let users = [
    {
      id: '70c618cb-a9a8-43f3-b692-3878a9ec44e1',
      username: 'johndoe',
      password: '$2a$08$YIj.vn8QVGYWtOzp.u7acOZgHYM4cVRH13Ws5kbQT4RxKOLbmX4ta', // 123456
      email: 'john@doe'
    }
  ];

  router.get('/register', (req, res) => {
    res.render('register');
  });

  router.post('/register', (req, res) => {
    console.log(req.body);

    const passwordHash = bcrypt.hashSync(req.body.password, 8);

    users.push({
      id: uuidv4(),
      username: req.body.username,
      password: passwordHash,
      email: req.body.email,
    });

    res.sendStatus(200);
  });


  router.get('/users', (req, res) => {
    res.json(users);
  });

module.exports = router;
