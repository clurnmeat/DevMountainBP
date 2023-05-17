const express = require('express')
app = express()
app.use(express.json)
app.use(express.static(`${__dirname}/public`));
require('dotenv').config()

app.post(`/question`, (req, res) => {
    let data = req.params
    let question = req.body
    console.log(question, data)
    return res.status(200).send(question)
})

app.listen(8080, () => console.log("Jaminin on 8080"))
