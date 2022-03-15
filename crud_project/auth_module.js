const auth_module = (req, res, next) => {
  console.log("Auth middleware called");
  next()
}

export default auth_module
