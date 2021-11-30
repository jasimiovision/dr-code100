const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, "SOME_SECRET_KEY_TO_CHANGE_LATER");   // obtained from auth.js
    res.locals.role = decoded["role"];
    res.locals.permission = decoded["permission"];
    next();
  } catch (error) {
    res.status(401).json({ message: "Auth Failed!" });
  }

};
