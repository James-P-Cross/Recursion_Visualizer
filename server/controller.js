const fileController = {};

//controller being reached when reload 3000
fileController.recursion = (req, res, next) => {
  console.log('controller reached');
  //send to or have big function in here
  const result = 5;
  res.locals.Visuals = result;
  console.log(res.locals.Visuals);
  next();
};




module.exports = fileController;