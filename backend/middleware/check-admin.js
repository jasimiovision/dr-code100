module.exports = (req, res, next) => {
  const role = res.locals.role;
  if (role === "admin"){
    next();
  } else {
    res.status(401).json({ message: "Admin Access Only"});
  }
};
