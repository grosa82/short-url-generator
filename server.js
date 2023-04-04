var port = process.env.PORT || 3001,
  express = require('express'),
  app = express(),
  cors = require('cors'),
  http = require('http'),
  bodyParser = require('body-parser'),
  Routes = require('./api/routes');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

Routes(app); //register the route

var server = http.createServer(app);

server.listen(port, function () {
  console.log(`Api server started on: ${port}`);
});

process.on('uncaughtException', function (err) {
  console.log(err);
});