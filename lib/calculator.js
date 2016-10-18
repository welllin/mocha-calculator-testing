function Calculator(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') return {};

  this.num1 = num1;
  this.num2 = num2;
}

var _p = Calculator.prototype;

_p.add = function() {
  return this.num1 + this.num2;
};

_p.minus = function() {
  return this.num1 - this.num2;
};

_p.times = function() {
  return this.num1 * this.num2;
};

_p.divides = function() {
  if (this.num2 === 0) return false;

  return this.num1 / this.num2;lear
};

_p.modules = function() {
  return this.num1 % this.num2;
};

module.exports = Calculator;
