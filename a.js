const express = require('express')
const bodyParser = require('body-parser');
var mongo = require('mongodb');
const app = express();
const port = 8082;
app.use(express.static('public'));
app.set('view engine', 'ejs')

//var io = require('socket.io')(http);
var p = { firstName: "John", lastName: "Doe", age: 46 };

app.get('/a', function (req, res) {

  var MongoClient = require('mongodb').MongoClient;
  var url = "mongodb://localhost:27017/";
  var myobj = {"uid":"123","name":"ahmed","password":"aaaaaa"};
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
   
    dbo.collection("user").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  }); 
  // console.log(newarray);



});
app.get('/az', function (req, res) {
    console.log('todo ');
    res.render('index');
  });

  app.post('/', function (req, res) {
    res.render('index');
  })
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));