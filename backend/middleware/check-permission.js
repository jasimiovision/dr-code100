module.exports = (req, res, next) => {
  const role = res.locals.role;
  const permission = res.locals.permission;
  const query_project = req.headers.projectid;

  if (role === "admin"){
    next();
  } else {
    if(permission.includes(query_project)) {
      next();
    } else {
      res.status(401).json({ message: "Access denied! Not authorized to view resource"});
    }
  }
};
