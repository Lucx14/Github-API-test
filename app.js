const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello world!!!');
});

app.listen(port, () => console.log(`Server started on port ${port}`));