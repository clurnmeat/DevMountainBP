const pizzas = document.querySelectorAll('.pizza-item')
const form = document.querySelector('form')
const pizzaName = document.querySelector('#pizza-name')
const pizzaPicture = document.querySelector('#pizza-picture')
const pizzaDisplay = document.querySelector('#pizzaDisplay')


const formSubmit = (evt) => {
    evt.preventDefault()

    alert(`Thank you for recommending ${pizzaName.value}`)
    let newSection = document.createElement('section')
    newSection.classList.add('pizza-item')
    let newPizzaImg = document.createElement('img')
    newPizzaImg.setAttribute('src', pizzaPicture.value)
    newSection.setAttribute('value', pizzaName.value)
    newSection.appendChild(newPizzaImg)
    let pizzaTitle = document.createElement('p')
    pizzaTitle.setAttribute('value', pizzaName)
    pizzaTitle.textContent = pizzaName.value
    newSection.appendChild(pizzaTitle)
    pizzaDisplay.appendChild(newSection)

}








form.addEventListener('submit', formSubmit)




let pizzaArr = [...pizzas]



const pizzaAlert = (evt) => {
    const pizza = evt.target.getAttribute('value')
    alert(`you like ${pizza}`)
}




pizzaArr.map(el => el.addEventListener('click', pizzaAlert))