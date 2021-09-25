'use strict'

const express = require('express');
const config = require('./config')

const routes = require('./routes/routes');

const app = express();

app.use(express.json());

app.use('/api', routes.routes);

app.listen(config.port, () => console.log('APP is listening on port http://localhost:' + config.port));
