const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;

const randomWords = [
  'computer',
  'pen',
  'mouse',
  'coffee',
  'tea',
  'coke',
  'nerve',
];

app.use(cors());

app.get('/random', (req, res) => {
  const randomWord = randomWords[Math.floor(Math.random()*randomWords.length)];
  console.log(randomWord);
  res.send(randomWord);
});

app.listen(port, () => {
  console.log('Listening on port', port);
});