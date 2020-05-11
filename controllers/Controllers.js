'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'), SMS = mongoose.model('sms');


exports.add = function (req, res) {

  console.log('todo ');
  res.render('index');
};

exports.users = function (req, res) {

  User.find({}, function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.create_user = function (req, res) {
  var obj = {
    name: "ahmed",
    uid: "122",
    password: "zee"
  };
  var new_user = new User(req.body);
  new_user.save(function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.get_user = function (req, res) {
  User.findById(req.params.uid, function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.update_a_user = function (req, res) {
  User.findOneAndUpdate({ _id: req.params.uid }, req.body, { new: true }, function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.delete_a_user = function (req, res) {

  User.remove({
    _id: req.params.user
  }, function (err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'user successfully deleted' });
  });
};

exports.allsms = function (req, res) {
  User.find({}, function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.add_sms = function (req, res) {
  var new_sms = new SMS(req.body);
  new_sms.save(function (err, sms) {
    if (err)
      res.send(err);
    res.json(sms);
  });
};

exports.get_sms = function (req, res) {
  User.findById(req.params.uid, function (err, sms) {
    if (err)
      res.send(err);
    res.json(sms);
  });
};


exports.delete_a_sms = function (req, res) {

  User.remove({
    _id: req.params.id
  }, function (err, sms) {
    if (err)
      res.send(err);
    res.json({ message: 'user successfully deleted' });
  });
};

