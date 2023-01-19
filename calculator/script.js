class Calculator{
    constructor(previousTextElement, currentTextElement){
this.previousTextElement = previousTextElement
this.currentTextElement=currentTextElement
this.clear
    }

    clear(){
this.current = ''
this.previous = ''
this.operation = undefined
    }
    delete(){

    }
    appendNumber(number){
if(number === '.' && this.current.includes('.')) return
this.current =  number
    }

    chooseOperation(operation){
        if(this.current === '') return
 if (this.previous !== ''){
    this.compute()
 }       
this.operation = operation
this.previous= this.current
this.current =''
    }
    compute(){

    }
    updateDisplay(){
this.currentTextElement.innerText = this.current
this.previousTextElement.innerText = this.previous
    }
}

var numberButtons = document.querySelectorAll('[data-number]')
var operationButtons= document.querySelectorAll('[data-operation]')
var equalsButton= document.querySelector('[data-equals]')
var deleteButton= document.querySelector('[data-delete]')
var allClearButton= document.querySelector('[data-all-clear]')
var previousTextElement= document.querySelector('[data-previous]')
var currentTextElement= document.querySelector('[data-current]')

var calculator = new Calculator(previousTextElement, currentTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click',()=>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click',()=>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

