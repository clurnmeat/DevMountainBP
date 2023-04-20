let addBtn = document.querySelector('button')
let form = document.querySelector('form')
let movieList = document.querySelector('ul')
let inputField = document.querySelector('input')
let message = document.querySelector('#message')



const addName = (evnt) => {
    evnt.preventDefault()
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span') 
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)
    movie.appendChild(movieTitle) 
    movieList.appendChild(movie)
    let deletebtn = document.createElement('button')
    deletebtn.textContent = 'X'
    deletebtn.addEventListener('click', deleteMovie)
    movie.appendChild(deletebtn)
    message.textContent = 'Movie Added!'

}

const deleteMovie = (evnt) => {
    evnt.target.parentNode.remove()
    message.textContent = 'Movie Deleted!'
    revealMessage
    
}  


const crossOffMovie = (evnt) => {
    evnt.target.classList.toggle('checked')
    if(evnt.target.classList.contains('checked')){
        message.textContent = 'Movie Watched!'
    } else{
        message.textContent = 'Movie Added Back!'
    }
}

const revealMessage = () => {
    setTimeout(() => message.classList.add('hide'), 1000)
}

addBtn.addEventListener('click', addName)



console.log('success')