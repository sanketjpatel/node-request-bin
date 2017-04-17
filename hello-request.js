var request = require('request');
var url ='http://requestb.in/wfpep3wf'
request(url, function (error, response, body) {
  if (!error) {
    console.log(body);
  }
});
