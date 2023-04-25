const express = require('express')
const cors = require('cors')
app = express()

// middle-ware
app.use(cors)
app.use(express.json)

const db = require('./db.json')
const getAllMovies = (req, res) => {
    res.status(200).send(allMovies)
    
}
let allMovies = db


const userController = 

// routes
app.get('/api/movies', getAllMovies)






app.listen(4004, () => 'Listening on port 4004')