
let sumDisplay = document.getElementById("sum")

let addBtn = document.getElementById("add-btn")
let divideBtn = document.getElementById("divide-btn")
let subtractBtn = document.getElementById("subtract-btn")
let multiplyBtn = document.getElementById("multiply-btn")
let clearBtn = document.getElementById("clear-btn")


addBtn.addEventListener("click", function () {
    const num1 = document.getElementById("num1").value
    const num2 = document.getElementById("num2").value
    let sum = parseInt(num1) + parseInt(num2)
    console.log(sum)
    sumDisplay.textContent = "Sum: " + sum
})

subtractBtn.addEventListener("click", function () {

    const num1 = document.getElementById("num1").value
    const num2 = document.getElementById("num2").value
    let sum = num1 - num2
    sumDisplay.textContent = "Sum: " + sum
})

divideBtn.addEventListener("click", function () {

    const num1 = document.getElementById("num1").value
    const num2 = document.getElementById("num2").value
    let sum = num1 / num2
    sumDisplay.textContent = "Sum:  " + sum
})
multiplyBtn.addEventListener("click", function () {

    const num1 = document.getElementById("num1").value
    const num2 = document.getElementById("num2").value
    let sum = num1 * num2
    sumDisplay.textContent = "Sum: " + sum
})

