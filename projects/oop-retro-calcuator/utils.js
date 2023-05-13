const NUMBER_FORMATTER = new Intl.NumberFormat('en', {
  maximumFractionDigits: 10,
})
const displayOutputResultNumber = (number) => {
  return NUMBER_FORMATTER.format(number)
}



const supportedKeyboardKeys = [
  '0', '1', '2', '4', '5', '6', '7', '8', '9', '.', '=', '+', '-', '*', '/', 'c', 'C', 'd', 'D', 'Backspace'
]

const operatorSymbols  = [
  '÷', '×', '-', '+', '.'
]

export {
  displayOutputResultNumber,
  supportedKeyboardKeys,
  operatorSymbols
}

