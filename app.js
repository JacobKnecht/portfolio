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

//Handler to ignore requests for favicon.ico
//such requests were triggering the 404 'not found' middleware though the
//browser would render correctly matched routes
app.get('/favicon.ico', (req, res) => res.status(204));

//Default 404 'Not Found' route handler
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

//Error handler
app.use((err, req, res, next) => {
  res.render('error', {error: err});
  console.log('The provided URL does not exist as a route for this application');
});

//Listen statement
app.listen(port, () => console.log(`app is listening on port ${port}`));
