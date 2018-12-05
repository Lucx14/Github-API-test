const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const fetch = require('node-fetch');
const developer = require('./models/developer');

// ___APP INITIALIZE___
const app = express();
const port = 3000;

// ___VIEW ENGINE SETUP___
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// _____SET STATIC FOLDER_____
app.use(express.static(path.join(__dirname, 'public')));

// _____MIDDLEWARE_____
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'thesecret',
  saveUninitialized: false,
  resave: false,
}));

// ___ROUTES___
app.get('/', (req, res) => res.render('index'));

app.get('/query', (req, res) => res.render('query'));

app.post('/query', (req, res) => {
  req.session.username = req.body.username;
  res.redirect('/answer');
});

app.get('/answer', (req, res) => {
  // Need to think about what happens when a user inputs nothing in the box
  // And also how we deal with invalid usernames
  // So at this point before i even get to my model obeject i want to have validated the username is correct
  fetch(`https://api.github.com/users/${req.session.username}/repos`)
    .then(res => res.json())
    .then((json) => {
      const dev = new developer(json);
      let lang = dev.favouriteLanguage();
      res.render('answer', { language: lang });
    })
    .catch(err => {
      return err;
    });
});

app.listen(port, () => console.log(`Server started on port ${port}`));
