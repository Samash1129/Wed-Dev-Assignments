"use strict";

var express = require("express");

var Test = require("../Models/test");

var router = express.Router(); //Get

router.get('/', function _callee(req, res) {
  var tester;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Test.find());

        case 3:
          tester = _context.sent;
          res.json(tester);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.send({
            message: "Not Found"
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
router.get('/:id', function _callee2(req, res) {
  var tester;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Test.findById(req.params.id));

        case 3:
          tester = _context2.sent;
          res.json(tester);
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.send({
            message: "Not Found"
          });

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); //Post

router.post('/', function _callee3(req, res) {
  var inserttodb, addtodb;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          inserttodb = new Test({
            name: req.body.name,
            number: req.body.number
          });
          _context3.next = 4;
          return regeneratorRuntime.awrap(inserttodb.save());

        case 4:
          addtodb = _context3.sent;
          res.json(addtodb);
          _context3.next = 12;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.error(_context3.t0);
          res.send("Not Inserted");

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
}); //Patch

router.patch('/:id', function _callee4(req, res) {
  var tester, addtodb;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(Test.findById(req.params.id));

        case 3:
          tester = _context4.sent;
          tester.number = req.body.number;
          _context4.next = 7;
          return regeneratorRuntime.awrap(tester.save());

        case 7:
          addtodb = _context4.sent;
          res.json(addtodb);
          _context4.next = 14;
          break;

        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          res.send({
            message: "Not Found"
          });

        case 14:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 11]]);
});
module.exports = router;