# dr-one
A repository containing the web-platform sub system for the dr-one project. This repository includes source codes for both the front-end and back-end component of the web platform.

# User Manual
-

# Developer Manual

## Technology Stack (MEAN)
* MongoDB: Database
* Express: Backend Framework
* Angular: Frontend Framework
* Node.js: Backend Runtime Environment
* AWS S3: File Storage
* AWS EC2: Web Server

## Installation Guide
* Firstly, you will need to download `node` and `npm` from https://nodejs.org/en/download/.
* You can also download `node` either from nodesource or nvm. `npm` will come together with the `node` that you downloaded.

* After cloning the repository, you will need to run the following command to install all appropiate node modules for the project.

    ``` $ npm install ```

* The above code will also install angular cli for you, but you will not be able to use it yet. Run the following code to enable angular cli.

    ``` $ npm install -g @angular/cli ```

    Check if you have it activated properly by executing

    ``` $ ng version ```

* Next install the `nodemon` for a live development server.
    
    ``` $ npm install -g nodemon ```


## To Run

Frontend

    $ ng serve

Backend + Database (MongoDB)

    $ npm run start:server

## Project Structure Documentaion
1. Front End [Hosted on Port 4200 -- http://127.0.0.1:4200/]

    To start the frontend application

        ng serve

    Entry point for the frontend: `index.html` + `styles.scss` (under `/src`) --> single page application

    Other files related to frontend: `/src`

    * `/app`: house the different elements (component, directive, service) for the angular framework

      * `/app` can be segmented into 3 main portion:
      
        1. Folder for components that will appear on all page (e.g. footer, top-bar, side-bar)
        
            a. `/general-services` will have a separate folder of its own. This will contain all Angular services that are not tied to a single page, including RouteGuards used in the project.

            b. `/sample` is a playground directory containing the basic how-to to connect the front-end to the backend through angular services. Currently the routes to these components are disabled.

        2. Config files for the angular application to work which include `app.module.ts` for the main imports, exports and configuration, `app-routing.module.ts` for routing purposes, and app.component as `app-root`.

        3. `/pages` with many sub-directories describing the different pages in our web application (e.g. report-page, edit-page) where each sub directory will house the many components to build the respective page + `/services` to store all the services used

    * `/assets`: any files that is required to be up together with the web application 
    * `/environments`: contain environment dependent variables (i.e. API url for dev and prod server)

2. Back End + Database [Hosted on Port 3000 -- http://127.0.0.1:3000/]

    To start the backend server

        npm run start:server
    
    Entry point for the backend: `server.js`

    Other files related to backend/database: `/backend`
    
    * `app.js`: express app that managed backend + database (Mongoose)
    * `aws_config.js`: stores the AWS credentials to interface with the service through their API
    * `/models`: to store model (schema) for MongoDB database
    * `/routes`: contain various API routes, segmented on data type
    * `/middleware`: contain various middleware to handle request.
      * Authorization and Authentication are implemented through middleware
      * Note: As the backend routes are mostly protected with the Authorization and Authentication system, it is a must to include the authorization token and project ID whenever needed when invoking it from outside Angular (i.e. with `curl` or through Postman)

3. Project Config Files
    
    All config files for the project are present at the top level directory of the project. Here are a list of key config files: `angular.json`, `package.json`

## List of Accessible Pages:
* `/`: landing page
* `/home`: user's home page (only accessible after login)
* `/edit/sampleid`: templated edit page
* `/visualization/sampleid`: templated visualization page
* `/report/sampleid`: templated report page
* `/upload`: upload page to create new project
* `/admin`: admin dashbooard to manage web users
* `/loading/sampleid`: templated loading page that will display while waiting for the algorithm to finish running
