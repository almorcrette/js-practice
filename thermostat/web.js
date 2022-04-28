const express = require('express');
const app = express();
const port = 3000;

const Thermostat = require('./thermostat')

const thermostat = new Thermostat();

app.get('/', (req, res) => {
  res.send('Go thermostat')
});

app.get('/temperature', (req, res) => {
  thermostat.getTemperature()
  // res.send();
});

app.post('/up', (req, res) => {
  thermostat.up();
});

app.post('/down', (req, res) => {
  thermostat.down();
});

app.delete('/temperature', (req, res) => {
  thermostat.reset();
})

console.log(`Server listening on localhost:${port}`);
app.listen(port);