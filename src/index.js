const uniqueRandomArray = require('unique-random-array');
const starWarsNames = require('./starwars-names.json');
const getRandomItem = uniqueRandomArray(starWarsNames);

module.exports = {
  all: starWarsNames,
  random: (number) => {
    if (!number) {
      return getRandomItem();
    }

    let randomArrayItems = [];
    for(let i = 1; i < number; i++) {
      randomArrayItems.push(getRandomItem());
    }
    return randomArrayItems;
  },
}
