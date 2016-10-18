function Calculator(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') return {};

  this.num1 = num1;
  this.num2 = num2;
}

Calculator.prototype.add = function() {
  return this.num1 + this.num2;
};

Calculator.prototype.minus = function() {
  return this.num1 - this.num2;
};

Calculator.prototype.times = function() {
  return this.num1 * this.num2;
};

Calculator.prototype.divides = function() {
  if (this.num2 === 0) return false;

  return this.num1 / this.num2;lear
};

Calculator.prototype.modules = function() {
  return this.num1 % this.num2;
};

module.exports = Calculator;
