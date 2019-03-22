const express = require('express');
const expressApp = express();
const bodyParser = require('body-parser'); // for parsing the body of a POST request
const formidableMiddleware = require('express-formidable');
var mammoth = require("mammoth");

const port = 8000;

expressApp.use(formidableMiddleware());
//expressApp.use(bodyParser.urlencoded({ extended: true }));

// looks for index.js and returns its contents, which consists of each available route.
require('./routes')(expressApp);

expressApp.listen(port, () => {
	console.log('Live on port ' + port);
});

