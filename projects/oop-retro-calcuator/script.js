// todo
// actions
// 1. click a number
// 2. click an operation
// 3. click clear 
// 4. click delete 
// 5. click the period button
// 6. click the equal button

// import
import Calculator from "./Calculator.js"

// initiate calculator obj
const calculator = new Calculator()

// handle event listener by event delegation method
document.addEventListener('click', (e) => {

  const target = e.target

  if(target.matches('[data-all-clear]')) {
    calculator.clear()
  }

  if(target.matches('[data-delete]')) {
    calculator.removeDigit()
  }

  if(target.matches('[data-operation]')) {
    calculator.choseOperation(target.textContent)
  }

  if(target.matches('[data-number]')) {
    calculator.addDigit(target.textContent)
  }

  if(target.matches('[data-equals]')) {
    calculator.calculate()
  }

})