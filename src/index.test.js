const { expect } = require('chai');
const moment = require('moment');
const starwarsName = require('./index');

describe('starwars-names', () => {
  describe('all', () => {
    it('should be an array of strings', () => {
      expect(starwarsName.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array)  {
        return array.every(item =>  typeof item === "string");
      }
    })

    it('should include `Luke Skywalker`', () => {
      expect(starwarsName.all).to.include('Luke Skywalker');
    })
  })

  describe('random', () => {
    it('should return a random item from starwarsNames.all', () => {
      const randomItem = starwarsName.random();
      expect(starwarsName.all).to.include(randomItem);
    })

    it('should return an array of random items if passed length', () => {
      const randomArrayItems = starwarsName.random(3);
      expect(randomArrayItems).to.have.length(3);
      randomArrayItems.forEach(item => {
        expect(starwarsName.all).to.include(item);
      })
    })
  })

  describe('today', () => {
    it('should return today date format MMMM Do YYYY, h:mm:ss a', () => {
      var m = moment('2016-01-02T23:40:40.678');
      expect(m.format('MMMM Do YYYY, h:mm:ss a')).to.equal('January 2nd 2016, 11:40:40 pm');
    })
  })
})
