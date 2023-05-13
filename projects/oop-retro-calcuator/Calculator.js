import { displayOutputResultNumber, operatorSymbols } from "./utils.js";

export default class Calculator {
  constructor(inputDisplay, outputResultDisplay) {
    this.inputDisplay = inputDisplay;
    this.outputResultDisplay = outputResultDisplay;

    this.clear();
  }

  get input() {
    return this.inputDisplay.textContent;
  }

  set input(value) {
    this.inputDisplay.textContent = value ?? "";
  }

  get outputResult() {
    return this.outputResultDisplay.textContent;
  }

  set outputResult(value) {
    return (this.outputResultDisplay.textContent = value ?? "");
  }

  clear() {
    this.input = "";
    this.outputResult = 0;
  }

  addDigit(digit) {
    if (digit === ".") {
      if (checkIfDotOrOperationBeingDoubled(this.input)) return;

      const inputArr = this.input.split(/[×÷+-]/);
      const currentOperand = inputArr[inputArr.length - 1];
      if (currentOperand.includes(".")) return;
    }
    this.input += digit;
  }

  removeDigit() {
    const inputStr = this.input;
    if (!inputStr?.length) return;
    this.input = this.input.substring(0, inputStr.length - 1);
  }

  choseOperation(operator) {
    if (checkIfDotOrOperationBeingDoubled(this.input)) return;
    this.input += operator;
  }

  calculate() {
    if (!this.input) return;
    let result;
    const lastDigit = this.input[this.input.length - 1];
    if (lastDigit === ".") {
      this.input = this.input.substring(0, this.input.length - 1);
    }
    if (operatorSymbols.includes(this.input[this.input.length - 1])) {
      result = "Syntax Error";
      this.input = "";
    }
    const equationResult = this.#parse(this.input);
    if (equationResult.includes("e")) {
      this.outputResult = equationResult;
      return;
    }
    console.log(displayOutputResultNumber(this.#parse(this.input)));
    this.outputResult = displayOutputResultNumber(this.#parse(this.input));
  }

  #parse(equation) {
    console.log(equation);
    if (equation.match(EXPONENT_REGEX)) {
      const result = this.#handleMath(equation.match(EXPONENT_REGEX).groups);
      const newEquation = equation.replace(EXPONENT_REGEX, result);
      return this.#parse(newEquation);
    } else if (equation.match(MULTIPLY_DIVIDE_REGEX)) {
      const result = this.#handleMath(
        equation.match(MULTIPLY_DIVIDE_REGEX).groups
      );
      const newEquation = equation.replace(MULTIPLY_DIVIDE_REGEX, result);
      return this.#parse(newEquation);
    } else if (equation.match(ADD_SUBTRACT_REGEX)) {
      const result = this.#handleMath(
        equation.match(ADD_SUBTRACT_REGEX).groups
      );
      const newEquation = equation.replace(ADD_SUBTRACT_REGEX, result);
      return this.#parse(newEquation);
    } else {
      return equation;
    }
  }

  #handleMath({ operand1, operand2, operation }) {
    console.log(operand1, operand2, operation);
    const number1 = parseFloat(operand1);
    const number2 = parseFloat(operand2);

    switch (operation) {
      case "×":
        return number1 * number2;
      case "÷":
        return number1 / number2;
      case "+":
        return number1 + number2;
      case "-":
        return number1 - number2;
      case "^":
        return Math.pow(number1, number2);
    }
  }
}

const EXPONENT_REGEX = /(?<operand1>[-\d]+)\s*(?<operation>\^)\s*(?<operand2>[-\d]+)/;
// const MULTIPLY_DIVIDE_REGEX =/(?<operand1>\d+)\s*(?<operator>[÷×])\s*(?<operand2>\d+)/;
const MULTIPLY_DIVIDE_REGEX = /(?<operand1>\d+)\s*(?<operation>[÷ ×])\s*(?<operand2>\d+)/;
const ADD_SUBTRACT_REGEX =  
  /(?<operand1>\d+)\s*(?<operation>(?<!e)[\+\-])\s*(?<operand2>\d+)/;

const checkIfDotOrOperationBeingDoubled = (input) => {
  const inputArr = input.split("");
  const lastInput = inputArr[inputArr.length - 1];
  return operatorSymbols.includes(lastInput);
};
