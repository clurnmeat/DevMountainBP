const express = require('express')
app = express()
app.use(express.json)
app.post("/question", (req, res) => {
    let data = req.body
    let question = req.body.question
    console.log(question)
    return res.status(200).send(question)
})

app.listen(8080, () => console.log("Jaminin on 8080"))
