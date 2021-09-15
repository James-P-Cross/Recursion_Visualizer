const fileController = {};


fileController.recursion = (req, res, next) => {
  console.log('controller reached');
  //send to or have big function in here
  next();
};




module.exports = fileController;