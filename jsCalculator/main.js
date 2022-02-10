const num1 = document.querySelector(".input-el1")
const num2 = document.querySelector(".input-el2")
const result = document.querySelector(".result")
const add = document.querySelector(".add")
const substract = document.querySelector(".substract")
const multiply = document.querySelector(".multiply")
const divide = document.querySelector(".divide")


add.addEventListener("click", function(){
    if (num1.value && num2.value){
        let sum = Math.floor(num1.value) + Math.floor(num2.value)
        result.textContent = "Result: " + sum
        num1.value = ''
        num2.value = ''
    }
    else {
        result.textContent = "you haven't typed any number in input fields"
    }
})
substract.addEventListener("click", function(){
    if (num1.value && num2.value){
        let sum = Math.floor(num1.value) - Math.floor(num2.value)
        result.textContent = "Result: " + sum
        num1.value = ''
        num2.value = ''
    }
    else {
        result.textContent = "you haven't typed any number in input fields"
    }
})
multiply.addEventListener("click", function(){
    if (num1.value && num2.value){
        let sum = Math.floor(num1.value) * Math.floor(num2.value)
        result.textContent ="Result: " + sum
        num1.value = ''
        num2.value = ''
    }
    else {
        result.textContent = "you haven't typed any number in input fields"
    }
})
divide.addEventListener("click", function(){
    if (num1.value && num2.value){
        let sum = Math.floor(num1.value) / Math.floor(num2.value)
        result.textContent = "Result: " + sum
        num1.value = ''
        num2.value = ''
    }
    else {
        result.textContent = "you haven't typed any number in input fields"
    }
})