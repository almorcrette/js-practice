const express = require('express');
const app = express();
const port = 3000;

const Thermostat = require('./thermostat')

const thermostat = new Thermostat();

app.get('/', (req, res) => {
  res.send('Go thermostat')
});

app.get('/temperature', (req, res) => {
  let result = {
    "temperature": thermostat.getTemperature()
  }
  res.send(result);
});

app.post('/up', (req, res) => {
  let result =thermostat.up();
  res.send(`temperature increased to ${result}`);

});

app.post('/down', (req, res) => {
  let result = thermostat.down();
  res.send(`temperature decreased to ${result}`);
});

app.delete('/temperature', (req, res) => {
  let result = thermostat.reset();
  res.send(`temperature reset to ${result}`);

})

console.log(`Server listening on localhost:${port}`);
app.listen(port);