const express = require('express');
const path = require('path');

const routes = require('./routes');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/cow', routes.cow);

app.listen(3000);

console.log('Listening on http://localhost:3000/');

