/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(a, b) {
  this.a = a;
  this.b = b;
}

Calculator.prototype.sum = function () {
  return this.a + this.b;
};

Calculator.prototype.subtraction = function () {
  return this.a - this.b;
};

Calculator.prototype.multiplication = function () {
  return this.a * this.b;
};

Calculator.prototype.division = function () {
  return this.a / this.b;
};

let calCaculate = new Calculator(5, 6);
console.log(calCaculate.sum());
console.log(calCaculate.subtraction());
console.log(calCaculate.multiplication());
console.log(calCaculate.division());
