var plastiq = require('plastiq');
var mountTest = require('./mountTest');

var lastAttachment;

module.exports = function (app, options) {
  if (lastAttachment) {
    lastAttachment.remove();
  }

  var div = mountTest(options);
  plastiq.append(div, app, undefined, {
    requestRender: setTimeout
  });
};
