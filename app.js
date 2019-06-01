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

//Index/'Home' page route
app.get('/', (req, res) => {
  res.render('index', {projects: data.projects});
});

//'About' page route
app.get('/about', (req, res) => {
  res.render('about');
});

//'Projects' page route(s)
app.get('/projects/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  const ids = [];
  for(let project of data.projects) {
    ids.push(parseInt(project.id));
  }
  if(ids.includes(id)) {
    res.render('project', {project: data.projects[id]});
  } else {
    const error = new Error('Project Does Not Exist');
    error.status = 500;
    next(error);
  }
});

//Default 404 route handler
app.use((req, res, next) => {
  console.log('The provided URL does not exist as a route for this application');
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

//Error handler
app.use((err, req, res, next) => {
  res.render('error', {error: err});
});

//Listen statement
app.listen(port, () => console.log(`app is listening on port ${port}`));
