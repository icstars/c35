'use strict'

/*

 Here is where you will configure the routes of your application.
 This how you can make urls that will render your html pages you put in the /html folder.
 You will also create routes that will let you interact with the data in your database.

 To get render your html page or retrieve data you can use a GET request
 An example of this looks like:
 router.get('string with your route', function(req,res){
  return res.render('path to your views in the views folder')
 });

 router.get('string with your route', function(req,res){
  database.executeQuery("query", function(results) {
    res.send(results);
  });
 });

 You can also setup POST request for something that will send something to a database.
 router.post('string with your route', function(req,res){
  var query = "query string";
  database.executeQuery(query);
  return res.send("success");
 });

 */

var router = require('express').Router();
var database = require('../c35_modules/database');

module.exports = function() {

  router.get('/helloworld', function (req, res) {
    return res.render('helloworld.html');
  });

  router.post('/trains', function(req,res){
    var query = "INSERT INTO trains (name,inService,numberOfAvailable) VALUES ('" + req.body.nameOfTrain +
        "'," + req.body.inService  +
        "," + req.body.availableTrains + ")";

    database.executeQuery(query);
    return res.send("success");
  });

  return router
}();