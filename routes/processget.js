var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('page process get');
  
  // Prepare output in JSON format
  response = {first_name:req.query.first_name,
              last_name:req.query.last_name};
  console.log(response);
  res.end(JSON.stringify(response));
  //res.end(response);
});
*/

/* POST users listing. */
var urlencodedParser = bodyParser.urlencoded({ extended: false });
router.post('/', urlencodedParser, function(req, res, next) {
  res.send('page process get');
  
  // Prepare output in JSON format
  response = {first_name:req.query.first_name,
              last_name:req.query.last_name};
  console.log(response);
  res.end(JSON.stringify(response));
  //res.end(response);
});

module.exports = router;
