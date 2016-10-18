var Calculator = require('../lib/calculator.js');
var chai       = require('chai');
var expect     = chai.expect;

describe('Calculator', function() {
  describe('- Happy Path', function() {
    var calculator;

    beforeEach(function() {
      calculator = new Calculator(1, 3)
    });

    it('should accept two arguments', function() {
      expect(calculator.num1).to.not.be.undefined;
      expect(calculator.num2).to.not.be.undefined;
    })

    it('should accept only number as arguments', function() {
      expect(calculator.num1).to.be.a('number');
      expect(calculator.num2).to.be.a('number');
    });

    it('Add() - should return 4 when adding 1 and 3 together', function() {
      expect(calculator.add()).to.equal(4);
    });

    it('Minus() - should return -2 when substracting 1 from 3', function() {
      expect(calculator.minus()).to.equal(-2);
    })

    it('Times() - should return 3 when 1 times 3', function() {
      expect(calculator.times()).to.equal(3);
    })

    it('Divides() - should return 1/3 when 1 divides 3', function() {
      expect(calculator.divides()).to.equal(1/3);
    })

    it('Modules() - should return 1 when 1 modules 3', function() {
      expect(calculator.modules()).to.equal(1);
    })
  })

  describe('- Sad Path', function() {
    it('should return an empty object if arguments are not number', function() {
      var calculator = new Calculator(undefined, undefined);

      expect(calculator).to.eql({});
    })

    it('Divides() - shouldn return false when its trying to divide by 0', function() {
      var calculator = new Calculator(3, 0);

      expect(calculator.divides()).to.equal(false);
    })
  })
});
