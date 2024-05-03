const express = require('express');
const app = express();
const router = require('./routes/routing');
const errorLogger = require('./utilities/errorLogger');
const requestLogger = require('./utilities/requestLogger');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(requestLogger);
app.use('/', router);
app.use(errorLogger);

app.listen(3000, () => {
    console.log("server running in port 3000");
})