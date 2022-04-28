const express = require('express');
const app = express();
const port = 3000;
let counter = 0;

app.get('/', (req, res) => {
  res.send('Alexis has started using express.js')
});

app.post('/counter', (req, res) => {
  counter += 1;
  res.send('Got a POST request');
})

app.get('/counter', (req, res) => {
  res.send(`Counter is on ${counter}`)
});

app.delete('/counter', (req, res) => {
  counter = 0;
  res.send('Counter reset');
})

console.log(`Server listening on localhost:${port}`);
app.listen(port);