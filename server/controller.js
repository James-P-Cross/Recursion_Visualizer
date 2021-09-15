const fileController = {};


fileController.recursion = (req, res, next) => {
  console.log('controller reached');
  //send to or have big function in here
  const result = 5;
  res.locals.Visuals = result;
  next();
};




module.exports = fileController;