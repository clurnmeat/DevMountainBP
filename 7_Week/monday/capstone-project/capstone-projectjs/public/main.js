
const questionBox = document.getElementById('p-q')
const textArea = document.getElementById('question').textContent


questionBox.addEventListener("submit", () => {
    axios.post("/question", {question} ).then().catch(err => console.log(err))
})



