import { operatorSymbols } from "./utils.js";

export default class Calculator {
  
  constructor(inputDisplay, outputResultDisplay) {
    this.inputDisplay = inputDisplay;
    this.outputResultDisplay = outputResultDisplay

    this.clear();
  }

  get input() {
    return this.inputDisplay.textContent
  }

  set input(value) {
    this.inputDisplay.textContent = value ?? ''
  }

  get outputResult() {
    return this.outputResultDisplay.textContent
  }

  set outputResult(value) {
    return this.outputResultDisplay.textContent = value ?? ''
  } 

  clear() {
    this.input = ''
    this.outputResult = 0 
  }

  addDigit(digit) {
    if(digit === '.' ) {
      if(checkIfDotOrOperationBeingDoubled(this.input)) return

      const inputArr = this.input.split(/[×÷+-]/)
      const currentOperand = inputArr[inputArr.length-1]
      if(currentOperand.includes('.')) return;
    }
    this.input += digit
  }

  removeDigit() {
    const inputStr = this.input
    if(!inputStr?.length) return;
    this.input = this.input.substring(0, inputStr.length -1)
  }

  choseOperation(operator) {
    if(checkIfDotOrOperationBeingDoubled(this.input)) return;
    this.input += operator
  }

  calculate() {
    if(!this.input) return;
    let result;
    const lastDigit= this.input[this.input.length-1]
    if(lastDigit === '.') {
      this.input = this.input.substring(0, this.input.length-1)
    }
    if(operatorSymbols.includes(this.input[this.input.length-1])) {
      result = 'Syntax Error'
      this.input = ''
    }

    result = eval(this.input)
    this.outputResult = result
  }
}

const NUMBER_FORMATTER = new Intl.NumberFormat('en')
const displayOutputResultNumber = (number) => {
  return NUMBER_FORMATTER.format(number)
}

const checkIfDotOrOperationBeingDoubled = (input) => {
  const inputArr = input.split('')
  const lastInput = inputArr[inputArr.length - 1]
  return operatorSymbols.includes(lastInput)
}