'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = process.env.PORT || 8000;

app.listen(PORT);

// start server
app.listen(PORT, function () {
  return console.log('Server is running on port ' + PORT);
});