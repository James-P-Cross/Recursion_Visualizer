const express = require('express');

//import file controllers. . . ?
    //one controller to save the code?
    //one to send back the proper response based on the items in the call. . .
const fileController = require('./controller');

//not sure why this is .js. . .
const router = express.Router('./api.js');

//or route to api instead??
//just / would skip over your controllers
router.use('/', 
  fileController.recursion,
  (req, res, next) => {
    //do i send this as a json? An object that react is expecting cause I don't have that set up yet. . .
    // console.log(res.locals.Visuals)
    res.status(200).json([res.locals.Visuals]);
    // res.status(200).send([res.locals.Visuals]);
  }
);

module.exports = router;