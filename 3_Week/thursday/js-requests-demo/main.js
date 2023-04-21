const { default: axios } = require("axios")


console.log('connected')

const getAllBtn = document.querySelector('#all')
const charBtns = document.querySelectorAll('.char-btns')
const ageForm = document.querySelector('#age-form')
const ageInput = document.querySelector('#age-input')
const createForm = document.querySelector('#create-form')
const newFirstInput = document.querySelector('#first')
const newLastInput = document.querySelector('#last')
const newGenderDropDown = document.querySelector('select')
const newAgeInput = document.querySelector('#age')
const newLikesText = document.querySelector('textarea')
const charContainer = document.querySelector('section')

const baseURL = "http://localhost:4000"










function createCharacterCard(char) {
  let charCard = document.createElement('div')
  charCard.innerHTML = `<h3>${char.firstName} ${char.lastName}</h3>
  <p>gender: ${char.gender} | age: ${char.age}</p>
  <h4>Likes</h4>
  <ul>
    <li>${char.likes[0]}</li>
    <li>${char.likes[1]}</li>
    <li>${char.likes[2]}</li>
  </ul>`

  charContainer.appendChild(charCard)
}









function clearCharacters() {
  charContainer.innerHTML = ``
}

const getAllChars = () => {
  axios.get(`${baseURL}/characters`)
  .then(res => {
    res.data.map(char => createCharacterCard(char))
  })
  clearCharacters()
  .catch(err => console.log(err))
}
const getSingleChar = (event) => {
  console.log(event.target.id)
  axios.get(`${baseURL}/character?age=${ageInput.id}`)
  .then(response => {
    console.log(response)
    clearCharacters()
    res.data.map(char => createCharacterCard(char.data))
  })
}

const sortByAge = (event) => {
  event.preventDefault()

  axios.get(`${baseURL}/character/${ageInput.id}`)
  .then(res => {
    clearCharacters()
    console.log(res.data)
    res.data.map(char => createCharacterCard(char))
  })
  .catch(err => console.log(err))
}

const addNewChar = (e) => {
  e.preventDefault()
  
  let newLikes = newLikesText.value
  
  const body = {
    firstName: newFirstInput.value,
    newLast: newLastInput.value,
    newGender: newGender.value,
    newAge: newAgeInput.value,
    newLikes: newLikesText.value,  
  }
  axios.post(`${baseURL}`, body)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
}

for(let i=0; i < charBtns.length; i++){
  charBtns[i].addEventListener('click', getSingleChar)
}


ageForm.addEventListener('submit', sortByAge)
getAllBtn.addEventListener('click', getAllChars)