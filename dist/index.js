"use strict";

var _uniqueRandomArray = _interopRequireDefault(require("unique-random-array"));

var _starwarsNames = _interopRequireDefault(require("./starwars-names.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getRandomItem = (0, _uniqueRandomArray.default)(_starwarsNames.default);
module.exports = {
  all: _starwarsNames.default,
  random: number => {
    if (!number) {
      return getRandomItem();
    }

    let randomArrayItems = [];

    for (let i = 0; i < number; i++) {
      randomArrayItems.push(getRandomItem());
    }

    return randomArrayItems;
  }
};