import uniqueRandomArray from 'unique-random-array';
import starWarsNames from './starwars-names.json';

const getRandomItem = uniqueRandomArray(starWarsNames);

module.exports = {
  all: starWarsNames,
  random: (number) => {
    if (!number) {
      return getRandomItem();
    }

    let randomArrayItems = [];
    for(let i = 0; i < number; i++) {
      randomArrayItems.push(getRandomItem());
    }
    return randomArrayItems;
  },
}
