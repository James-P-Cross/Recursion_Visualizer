const fileController = {};

//controller being reached when reload 3000
fileController.recursion = (req, res, next) => {
  console.log('controller reached');
  //send to or have big function in here
  const result = 'Request mount a great success';
  res.locals.visuals = result;
  console.log(res.locals.visuals);
  return next();
};

fileController.recursionPost = (req, res, next) => {
  console.log('controller reached post');
  console.log(req)
  console.log(req.body);
  //send to or have big function in here



  // const result = 'response received';




  // res.locals.testSend = result;
  // console.log(res.locals.testSend);
  return next();
};


module.exports = fileController;