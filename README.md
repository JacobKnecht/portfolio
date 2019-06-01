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

Style Changes - The following is a list of the CSS classes and properties that
were changed to personalize the project:
1. h1,h2,h3,h4,h5,h6,p,ul :  
* font-family: "Lucida Console", Courier, monospace;  
2. .portfolio-me :  
* background: #5c78ed;  
* color: #000;  
3. .portfolio-me h5 :  
* color: #000;  
4. .portfolio-me p :  
* color: #000;  
5. .portfolio-me a :  
* color: #000;
6. .portfolio-me a:hover :  
* color: #555;  
7. .button :  
* font-family: "Lucida Console", Courier, monospace;  
* background-color: #5c78ed;  
* color: #000;  
8. .button:hover :  
* background-color: #869cf9;  
* color: #000;  
9. article :  
* background: #000;  
* color: #fff;  
10. .portfolio-meta :  
* color: #666;  
11. body :  
* background: #000;  
12. a :  
* color: #fff;  
13. h5 :  
* color: #666;
