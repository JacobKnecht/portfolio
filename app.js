//Requirement variables
const express = require('express');
const data = require('./data.json');
const path = require('path');

//Create application variables
const app = express();
const static = express.static();
const port = 3000;

//Static resources
app.use(static(path.join(__dirname, 'public')));

//Listen statement
app.listen(port, () => console.log(`app is listening on port ${port}`));
