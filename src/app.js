const express = require('express');
const morgarn = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./config/config');

const app = express();
app.use(cors());
app.use(morgarn('combined')); 
app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.send("Hello World!");
});

app.listen(config.port, () => console.log(`Lestening to port ${config.port}...`));