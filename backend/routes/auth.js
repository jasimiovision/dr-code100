const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const checkAuth = require("../middleware/check-auth");
const checkAdmin = require("../middleware/check-admin");

// Note: This middleware is executed after body-parser hence we can still use its functionality
const router = express.Router();

// ### Account Settings ### //
router.post("/register-user", checkAuth, checkAdmin, (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then(hashedPassword => {
      const user = new User({
        username: req.body.username,
        password: hashedPassword,
        role: req.body.role,
      });

      user.save()
        .then(result => {
          res.status(201).json({
            message: "User Created Successfully",
            result: result
          });
        })
        .catch(err => {
          res.status(500).json({
            error: err
          });
        });
    })
})

router.get("/user-info/", checkAuth, checkAdmin, (req, res, next) => {

  User.find({role: {$in: ["user", "client"]}}).then(userInfo => {
    if (userInfo) {
      res.status(200).json({data: userInfo});
    } else {
      res.status(404).json({message: "Fail to fetch list of users"});
    }
  });
})

router.delete("/delete-user/:username", checkAuth, checkAdmin, (req, res, next) => {

  User.deleteOne({ username: req.params.username }).then(result => {
    res.status(200).json({message: "User Deleted Successfully"});
  })
})

router.put("/set-permission/:username", checkAuth, checkAdmin, (req, res, next) => {

  User.updateOne({username: req.params.username, role: {$in: ["user", "client"]}}, {permission: req.body.permission}).then(result => {
    if (result.n !== 0) {
      res.status(200).json({message: "Permission Set Successfully"});
    } else {
      res.status(404).json({message: "User Not Found"});
    }
  })
})


// ### User Login ### //
router.post("/login", (req, res, next) => {
  let fetchedUser;
  User.findOne({username: req.body.username}).then(user => {
    if (!user) {
      return res.status(401).json({
        message: "Auth Failed"
      });
    }
    fetchedUser = user;
    return bcrypt.compare(req.body.password, user.password);
  })
  .then(result => {
    if (!result) {
      return res.status(401).json({
        message: "Auth Failed"
      });
    }
    const token = jwt.sign(
      {username: fetchedUser.username, role: fetchedUser.role, permission: fetchedUser.permission},
      "SOME_SECRET_KEY_TO_CHANGE_LATER",
      { expiresIn: "1h"}
    );
    res.status(200).json({
      token: token,
      expiresIn: "3600"
    })
  })
  .catch(err => {
    return res.status(401).json({
      message: "Auth Failed"
    });
  });
});

module.exports = router;
