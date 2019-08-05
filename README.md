# Portfolio Site

Purpose - This web application is a simple portfolio site that uses Node.js,
Express and Pug to render home, about, and project pages. It contains
information about me and some of my interests, as well as contact and social
media information. This site allows users to view all of my projects, as well
as their Github repositories and live demos.

Implementation - The site runs in the Node.js environment and uses the
Express framework to handle 'GET' requests for each of the site's page routes.
It uses the Pug template framework to enable dynamic rendering of each page.
The site stores information for each project in a json file, and then
interpolates that information into the Pug files.The site also provides error
handling by utilizing middleware that is designed to catch default 404 route
errors; if a route is not found/does not exist, an error page is rendered to
notify the user.

Deployment - To deploy the project, simply download the project files, then
navigate to the project directory in the terminal. Run the command 'npm install'
to install the project dependencies, then run the command 'npm start' to run the
application. The application will be running on port 3000, accessible through the
URL localhost:3000 via web browser.
