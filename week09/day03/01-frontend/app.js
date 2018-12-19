const express = require('express');
const app = express();
const path = require('path');

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
  app.use('/assets', express.static('assets'));
});


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


app.listen(8080);
console.log(`Now listening on port 8080`);