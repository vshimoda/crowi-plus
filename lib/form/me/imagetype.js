'use strict';

var form = require('express-form')
  , field = form.field;

module.exports = form(
  field('imagetypeForm.isGravatarEnabled').required()
);
