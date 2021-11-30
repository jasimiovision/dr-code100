// '/api/image'

const express = require("express");
const multer = require('multer');
const multerS3 = require('multer-s3');

const checkAuth = require("../middleware/check-auth");

const s3 = require("../s3_config");

// Note: This middleware is executed after body-parser hence we can still use its functionality
const router = express.Router();

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "drone-raw-data",
    key: function(req, file, cb){
      console.log(file);
      console.log(req.body.samplekey);
      var newFileName = req.body.samplekey + "/floorplans/" + Date.now().toString() + file.originalname;
      cb(null, newFileName);
    }
  })
})

router.post("/upload-image", checkAuth, upload.array('imageFile', 1), function(req, res, next) {
  console.log(req.body.imageFile);
  console.log(req.body.samplekey);
  console.log("Image Successfully Uploaded");
  res.status(200).json({'message': 'success'});
})

router.post("/get-image", checkAuth, (req, res, next) => {
  const params = {
    Bucket: 'drone-raw-data',
    Key: req.body.imageId
  }

  const params2 = {
    Bucket: 'drone-raw-data',
    Key: req.body.imageId,
    Expires: 60 * 1
  }

  s3.headObject(params, function(err, metadata) {
    console.log(err);
    if(err && err.code === 'NotFound') {
      res.status(404).json({'error': 'fileId does not exist'});
    } else {
      const accessible_url = s3.getSignedUrl('getObject', params2)
      res.status(200).json({'imageURL': accessible_url});
    }
  })
})


router.delete("/delete-object", (req, res, next) => {
  const listParams = {
    Bucket: "drone-raw-data",
    Prefix: "oiltanking2"
  }
  const deleteParams = {
    Bucket: "drone-raw-data",
    Delete: {
      Objects:[]
    }
  }
  s3.listObjects(listParams, function(err, data){
    if(err){res.status(400)}
    deleteParams.Delete.Objects = data.Contents.map((el) => {
      return {Key: el["Key"]}
    })
    console.log(deleteParams)
    s3.deleteObjects(deleteParams, function(err,data){
      if(err){res.status(400)};
      res.status(200).json({
        deleteParams: deleteParams,
        data: data
      });
    })
  })
})

module.exports = router;
