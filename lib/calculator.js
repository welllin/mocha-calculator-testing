var Calculator = function (num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') return {}

  this.num1 = num1;
  this.num2 = num2;

  this.add = function() {
    return this.num1 + this.num2;
  }

  this.minus = function() {
    return this.num1 - this.num2;
  }

  this.times = function() {
    return this.num1 * this.num2;
  }

  this.divides = function() {
    if (this.num2 === 0) return false;

    return this.num1 / this.num2;lear
  }

  this.modules = function() {
    return this.num1 % this.num2;
  }
}

module.exports = Calculator;
