"use strict";

var express = require('express');

var mongoose = require("mongoose");

var testSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    requested: true
  }
});
var Test = mongoose.model('Test', testSchema);
module.exports = Test;