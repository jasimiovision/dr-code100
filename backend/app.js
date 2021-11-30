const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// const allProjectsRoutes = require("./routes/allProjects");
const projectRoutes = require("./routes/project");
const floorplanRoutes = require("./routes/floorplan");
const keyframeRoutes = require("./routes/keyframe");
const defectRoutes = require("./routes/defect");
const reportRoutes = require("./routes/report");
const templateRoutes = require("./routes/template");
const authRoutes = require("./routes/auth");
const imageRoutes = require("./routes/image");
const sliderDataRoutes = require("./routes/sliderData");
const demoRoutes = require("./routes/demo");
const utilsRoutes = require("./routes/utils");

const app = express();

mongoose.connect("mongodb+srv://sample-user_1:HIZNqefH9sbYwESd@cluster-drone-gxgfq.mongodb.net/drone?retryWrites=true&w=majority", { useNewUrlParser: true})
  .then(() => {
    console.log("Database Connected Successfully")
  })
  .catch(() => {
    console.log("Connection Failed")
  });
/*  mongoose.connect("mongodb+srv://firstmongo:jasim1popy@cluster0.mikyu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true})
  .then(() => {
    console.log("Database Connected Successfully")
  })
  .catch(() => {
    console.log("Connection Failed")
  });
*/
// To counter deprecation warning: Mongoose's findOneAndUpdate() long pre-dates the MongoDB driver's findOneAndUpdate() function, so it uses the MongoDB driver's findAndModify() function instead.
mongoose.set('useFindAndModify', false);

  // Middlewares are executed from top to bottom

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, ProjectID, FolderName");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT, HEAD, OPTIONS");
  next();
});

// logging middleware
var num = 0;
app.use(function (req, res, next) {
    var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    var method = req.method;
    var url = req.url;

    console.log((++num) + ". IP " + ip + " " + method + " " + url);
    next();
});

//API Routes
// app.use('/api/all-projects', allProjectsRoutes);
app.use('/api/project', projectRoutes);
app.use('/api/floorplan', floorplanRoutes);
app.use('/api/keyframe', keyframeRoutes);
app.use('/api/defect', defectRoutes);
app.use('/api/image', imageRoutes);
app.use('/api/report', reportRoutes);
app.use('/api/template', templateRoutes);
app.use('/api/auth', authRoutes);
// for demo/testing purposes (not for deployment)
app.use('/api/demo', demoRoutes);
app.use('/api/utils', utilsRoutes);
app.use('/api/slider-data', sliderDataRoutes);

module.exports = app;
