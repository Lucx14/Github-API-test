const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const session = require('express-session');
const fetch = require('node-fetch');
const { check, validationResult } = require('express-validator/check');
const Developer = require('./models/developer');

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

app.post('/query', [
  check('username')
    .not()
    .isEmpty(),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.render('query', {
      errors: errors.array(),
    });
  } else {
    req.session.username = req.body.username;
    res.redirect('/answer');
  }
});

app.get('/answer', (req, res) => {
  fetch(`https://api.github.com/users/${req.session.username}/repos`)
    .then((response) => {
      if (response.status !== 200) {
        console.log(`Looks like there was a problem. Stateus Code: ${response.status}`);
        res.redirect('query');
      } else {
        response.json().then((json) => {
          const dev = new Developer(json);
          const lang = dev.favouriteLanguage();
          res.render('answer', { language: lang });
        });
      }
    })
    .catch((err) => {
      console.log('Fetch Error :-S', err);
    });
});

app.listen(port, () => console.log(`Server started on port ${port}`));
