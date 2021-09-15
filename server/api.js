const express = require('express');

//import file controllers. . . ?
    //one controller to save the code?
    //one to send back the proper response based on the items in the call. . .
const fileController = require('./controller');

const router = express.Router();

router.use('/', 
  fileController.recursion,
  (req, res, next) => {
    //do i send this as a json? An object that react is expecting cause I don't have that set up yet. . .
    //the visuals
    //return answer to function AKA output
    res.status(200).json({
    //   console.log(res.locals.Visuals),
      // Visuals: [...res.locals.Visuals]
    });
  }
)

module.exports = router;