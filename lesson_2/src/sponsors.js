"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calcCash = calcCash;
exports.sponsors = exports.money = void 0;
var sponsors = {
  cash: [40000, 5000, 30400, 12000],
  eu: ['SRL', 'PLO', 'J&K'],
  rus: ['RusAuto', 'SBO']
};
exports.sponsors = sponsors;

function calcCash() {
  for (var _len = arguments.length, own = new Array(_len), _key = 0; _key < _len; _key++) {
    own[_key] = arguments[_key];
  }

  var total = own;
  return total;
}

var money = calcCash(null, sponsors.cash);
exports.money = money;