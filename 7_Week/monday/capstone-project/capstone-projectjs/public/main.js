
const questionBox = document.querySelector('#question')
const textArea = document.getElementById('#question').textContent


questionBox.addEventListener("click", (event) => {
    event.preventDefault()
    axios.get(`http://localhost:5500/public/index.html`).then(res => res.data).catch(err => console.log(err))
})



