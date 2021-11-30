module.exports = (req, res, next) => {
  const role = res.locals.role;
  if (role === "client"){
    res.status(401).json({ message: "No access for client role"});
  } else {
    next();
  }
};
