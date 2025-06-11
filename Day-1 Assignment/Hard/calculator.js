/*
  Implement a class `Calculator` having below methods:
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Notes:
        1. Ignore multiple spaces.
        2. Throw an error for invalid expressions (e.g. `5 + abc`)
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num) {
    this.result += num;
  }

  subtract(num) {
    this.result -= num;
  }

  multiply(num) {
    this.result *= num;
  }

  divide(num) {
    if (num === 0) throw new Error("Division by zero is not allowed.");
    this.result /= num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
   
    const cleanedExpr = expression.replace(/\s+/g, '');
    
    
    if (!/^[\d+\-*/().]+$/.test(cleanedExpr)) {
      throw new Error("Invalid characters in expression.");
    }

    try {
     
      const evalResult = eval(cleanedExpr);
      if (typeof evalResult !== 'number' || isNaN(evalResult) || !isFinite(evalResult)) {
        throw new Error("Invalid mathematical expression.");
      }
      this.result = evalResult;
    } catch (err) {
      throw new Error("Error evaluating expression: " + err.message);
    }
  }
}

const calc = new Calculator();

calc.add(10);
calc.multiply(2);
console.log("Result after add and multiply:", calc.getResult()); 

calc.clear();
calc.calculate("10 +   2 *    (   6 - (4 + 1) / 2) + 7");
console.log("Result after calculate:", calc.getResult()); 



