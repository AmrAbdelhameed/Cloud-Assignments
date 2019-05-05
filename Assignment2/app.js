/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

// create a new express server
var app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});

/*globals parameters */
var LanguageTranslatorV3 = require('watson-developer-cloud/language-translator/v3');
var languageTranslator = new LanguageTranslatorV3({
  version: '2018-05-01',
  iam_apikey: 'Fa9lRL8PhN9sc-CiFgSvKmwC5aTdEpdf_foEwFOc59YE',
  url: 'https://gateway-lon.watsonplatform.net/language-translator/api'
});

var parameters = {
	text: 'Hello',
	model_id: 'en-es'
  };
  
languageTranslator.translate(
	parameters,
  function(error, response) {
    if (error)
      console.log(error);
    else
      console.log(JSON.stringify(response, null, 2));
  }
);
