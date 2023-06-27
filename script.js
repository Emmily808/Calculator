let currentValue = ''
let previousValue = ''
let result = ''
let operation = ''

let display = document.getElementById("calculatorDisplay");
let operationButtons = document.querySelectorAll('[data-operationButtons]')
let numberButtons = document.querySelectorAll('[data-numberButtons]')
let clearButton = document.getElementById('clearButton')
let equalsButtons = document.querySelector('[data-equalsButtons]')
let deleteButton = document.getElementById('deleteButton')

clearButton.addEventListener('click',()=>{
  clearNums()
  updateDisplay()
})

numberButtons.forEach(button =>{
  button.addEventListener('click', ()=>{
    appendNumbers(button.textContent)
    updateDisplay()
  })
})

operationButtons.forEach(button =>{
  button.addEventListener('click', ()=>{
   chooseOperation(button.textContent)
   updateDisplay()
   
  })
})

equalsButtons.addEventListener('click', ()=>{
  operate()
  updateDisplay()
})

deleteButton.addEventListener('click', ()=>{
  deleteNumber()
  updateDisplay()
})

function deleteNumber(){
currentValue = currentValue.slice(0, -1)
}

function updateDisplay(){
  display.textContent = currentValue;
}

function appendNumbers(number){
  if(number === '.' && currentValue.includes('.')) return
  currentValue += number;
}

function chooseOperation (currentOperation){
  if(currentValue === '') return
  if(previousValue !== ''){
    console.log('el resultado es'+operate())
  }
  operation = currentOperation
  previousValue = currentValue
  currentValue = ''
}

function clearNums(){
  currentValue = ''
  previousValue = ''
  result = ''
  operation = undefined
}

function add(a,b) {
  return parseFloat(a) + parseFloat(b);
}

function subtract(a,b) {
  return parseFloat(a) - parseFloat(b);
}

function multiply(a,b) {
  return parseFloat(a) * parseFloat(b);
}

function divide(a,b) {
  return parseFloat(a) / parseFloat(b);
}

function operate() {
  let computation 
  if(isNaN(previousValue) || isNaN(currentValue)) return
if(operation == '+'){
 computation = add(previousValue, currentValue) 
} else if (operation == '-'){
   computation = subtract(previousValue, currentValue)
}else if (operation == '×'){
  computation = multiply(previousValue, currentValue)
}else if (operation == '÷'){
  computation = divide(previousValue, currentValue)
}else if(operation == '÷' && previousValue || currentValue == '0'){
  ThrowError()
  console.log('test')
}else{
  return
}
currentValue = computation
operation = undefined
previousValue = ''
return computation
}

function ThrowError(){
  display.textContent = 'ERROR'
}