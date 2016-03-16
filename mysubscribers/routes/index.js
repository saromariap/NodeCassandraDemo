var express = require('express');
var router = express.Router();
var cassandra = require('cassandra-driver');

var client = new cassandra.Client({contactPoints: ['127.0.0.1']});
client.connect(function(err, result) {
	console.log('index: cassandra connected.')
});

var getAllSubscribers = 'SELECT * FROM people.subscribers';


/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'MySubscribers' });
  //Param1 - SQL
  //Param2 - Parameters
  //Param3 - Callback function
  client.execute(getAllSubscribers, [], function(err, result) {
  	if(err) {
  		res.status(404).send({msg: err});
  	} else {
  		res.render('index', { title: 'List of Subscribers', subscribers: result.rows });
  	}
  });
});

module.exports = router;
