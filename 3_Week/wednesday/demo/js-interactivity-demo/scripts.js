console.log("JS file connected successfully")


let count = 0;
let counter = document.querySelector('#counter')
let plusBtn = document.querySelector('#plus-btn')
let minusBtn = document.querySelector('#minus-btn')
let resetBtn = document.querySelector('#reset-btn')



let increment = () => {
    count++;
    counter.textContent = count;
}

plusBtn.addEventListener('click', increment)



let decrement = () => {
    count--;
    counter.textContent = count;
}

minusBtn.addEventListener('click', decrement)

let resetCount = () => {
    count = 0;
    counter.textContent = count
}

resetBtn.addEventListener('click', resetCount)


