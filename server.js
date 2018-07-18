const express = require('express');

const app = express();

const port = process.env.PORT || 3001;

app.use(express.static('public'));

app.listen(port, function () {
  console.log("App is doing its thing on port",port);
});
