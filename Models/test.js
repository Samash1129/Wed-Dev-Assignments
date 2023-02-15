const express = require('express');
const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        requested: true
    }
})

const Test = mongoose.model('Test', testSchema)

module.exports = Test;