//Requirement variables
const express = require('express');
const data = require('./data.json');
const path = require('path');

//Create application variables
const app = express();
const port = 3000;

//Static resources
app.use(express.static(path.join(__dirname, 'public')));

//Listen statement
app.listen(port, () => console.log(`app is listening on port ${port}`));
