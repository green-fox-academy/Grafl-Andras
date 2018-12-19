// https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/rest-backend/exercises/frontend/javascript.md

const express = require('express');
const app = express();
const path = require('path');

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
  app.use('/assets', express.static('assets'));
});

// https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/rest-backend/exercises/doubling/README.md
app.get('/doubling', (req, res) => {
  const input = req.query.input;
  if (input) {
    const resObj = {
      'received': input,
      'result': input * 2
    }
    res.json(resObj);
  } else {
    res.send({
      "error": "Please provide an input!"
    });
  }
});

// https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/rest-backend/exercises/greeter/README.md
app.get('/greeter', (req, res) => {
  if (req.query.name && req.query.title) { //ha van name és title
    res.send({
      "welcome_message": `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
    });
  } else if (!req.query.name) { //ha nincs name
    res.send({
      "error": "Please provide a name!"
    });
  } else if (!req.query.title) { //ha nincs title
    res.send({
      "error": "Please provide a title!"
    });
  } else if (!req.query.name & !req.query.title) { //ha nincs se title, se name
    res.send({
      "error": "Please provide a title and a name!"
    });
  }
});

// https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/rest-backend/exercises/append-a/README.md
app.get('/appenda/:appendto', (req, res) => {
  const { appendto } = req.params;
  if (appendto) {
    res.json({ 'appended': `${appendto}a` });
  }
});

app.get('/appenda', (req, res) => {
  res.status(404).send();
});



app.listen(8080);
console.log(`Now listening on port 8080`);