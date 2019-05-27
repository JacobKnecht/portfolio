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
  res.render('index', {projects: data.projects});
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/projects/:id', (req, res) => {
  const id = parseInt(req.params.id);
  for(let project of data.projects) {
    if(parseInt(project.id) === id) {
      res.render('project', { project });
    } //else to catch errors
  }
});

//Listen statement
app.listen(port, () => console.log(`app is listening on port ${port}`));
