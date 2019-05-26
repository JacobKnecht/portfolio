//Requirement variables
const express = require('express');
const data = require('./data.json');
const path = require('path');

//Create application variables
const app = express();
const port = 3000;

//Set view engine to pug
app.set('view engine', 'pug');

//Static resources
app.use('/static', express.static(path.join(__dirname, 'public')));

//Routes
app.get('/', (req, res) => {
  console.log('Rendering index.pug');
  res.render('index', {projects: data.projects});
});
console.log(data.projects[2]);

//Listen statement
app.listen(port, () => console.log(`app is listening on port ${port}`));
