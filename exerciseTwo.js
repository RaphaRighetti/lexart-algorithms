class Calculator {
  static sum(arr) {
    try {
      if (!Array.isArray(arr) || arr.some((e) => typeof e !== 'number')) throw new Error();
      const arrSum = arr.reduce((acc, curr) => acc + curr);
      return arrSum;
    } catch (err) {
      console.log('O parâmetro deve ser um array de numbers');
    }
  }

  static subtract(arr) {
    try {
      if (!Array.isArray(arr) || arr.some((e) => typeof e !== 'number')) throw new Error();
      const arrSubtraction = arr.reduce((acc, curr) => acc - curr);
      return arrSubtraction;
    } catch (err) {
      console.log('O parâmetro deve ser um array de numbers');
    }
  }

  static subtraction(arr) {
    try {
      if (!Array.isArray(arr) || arr.some((e) => typeof e !== 'number')) throw new Error();
      const arrSubtraction = arr.reduce((acc, curr) => acc - curr);
      return arrSubtraction;
    } catch (err) {
      console.log('O parâmetro deve ser um array de numbers');
    }
  }

  static multiplication(arr) {
    try {
      if (!Array.isArray(arr) || arr.some((e) => typeof e !== 'number')) throw new Error();
      const arrMultiplication = arr.reduce((acc, curr) => acc * curr);
      return arrMultiplication;
    } catch (err) {
      console.log('O parâmetro deve ser um array de numbers');
    }
  }

  static division(a, b) {
    try {
      if (typeof a !== 'number' || typeof b !== 'number') throw new Error('Os parâmetros devem ser numbers');
      if (b === 0) throw new Error('O divisor não pode ser 0');
      const divisionResult = a / b;
      return divisionResult;
    } catch (err) {
      return err.message;
    }
  }
}

console.log(Calculator.sum([1, 3, 5, 7]));
console.log(Calculator.subtraction([23, 3, 5, 7]));
console.log(Calculator.multiplication([2, 3, 5]));
console.log(Calculator.division(49, 7));
console.log(Calculator.division(6, 0));