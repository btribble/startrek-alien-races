import {expect} from 'chai';
import starTrekAliens from './index';

describe('starTrekAliens-names', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(starTrekAliens.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }
    });

    it('should contain `Q`', function() {
      expect(starTrekAliens.all).to.include('Q');
    });
  });

  describe('random', function() {
    it('should return a random item from the starTrekAliens.all', function() {
      var randomItem = starTrekAliens.random();
      expect(starTrekAliens.all).to.include(randomItem);
    });

    it('should return an array of random items if passed a number', function() {
      var randomItems = starTrekAliens.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item) {
        expect(starTrekAliens.all).to.include(item);
      });
    });
  });
});
