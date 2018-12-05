const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// ___APP INITIALIZE___
const app = express();
const port = 3000;

// ___VIEW ENGINE SETUP___
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ___ROUTES___
app.get('/', (req, res) => res.render('index'));


app.listen(port, () => console.log(`Server started on port ${port}`));
