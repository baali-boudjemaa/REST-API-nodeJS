var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  User = require('./models/Models'), SMS = require('./models/Models'),
  bodyParser = require('body-parser');
  
app.use(express.static('public'));
app.set('view engine', 'ejs');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/chat', { useUnifiedTopology: true, useNewUrlParser: true });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./routes/Routes');
routes(app);

app.use(function (req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});
app.get('/az', function (req, res) {
  console.log('todo ');
  res.render('index');
});

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
