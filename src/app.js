const express = require('express');
const morgarn = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const {sequelize} = require('./models');

const config = require('./config/config');

const app = express();
app.use(cors());
app.use(morgarn('combined')); 
app.use(bodyParser.json());

routes(app); // load the routes

sequelize.sync({force:false})
.then(() => {
    app.listen(config.port, () => console.log(`Lestening to port ${config.port}...`));
});
