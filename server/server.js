const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

//Might need to serve up static files at some point

const apiRouter = require('./api');

// app.use('/dist', express.static(path.join(__dirname, '../dist')));

// app.get('/', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, '../index.html'));
// });

 //handle parsing request body
 //express built in middleware functions to parse incoming data from JSON to JS to be able to use in middleware?
app.use(express.json());

 //mapping endpoints to the proper router. Any request from this endpoint should be sent to this router.
app.use('/api', apiRouter);

//Might need to send html file on load something like this
// app.get('/', (req, res) => {
//   res.status(200).sendFile(path.resolve(__dirname, '.src.index.html'));
// });

//catch-all route handler
app.use('*', (req, res) => {
  res.status(404).send('404 Not Found');
})



app.listen(PORT, () => {
  console.log(`Server hears your on port ${PORT}`);
});

module.exports = app;