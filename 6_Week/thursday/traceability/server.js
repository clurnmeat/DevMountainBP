require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

app.use(express.json())
app.use(cors())

const {ROLLBAR_ACCESS_TOKEN} = process.env
// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: `${ROLLBAR_ACCESS_TOKEN}`,
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')

const students = ['Jimmy', 'Timothy', 'Jimothy']

app.get('/', (req, res) => {
    rollbar.info('served the html')
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/api/students', (req, res) => {
    rollbar.info('someone requested the list of students')
    res.status(200).send(students)
})

app.post('/api/students', (req, res) => {
   let {name} = req.body

   const index = students.findIndex(student => {
       return student === name
   })

   try {
       if (index === -1 && name !== '' && isNaN(value + 1)) {
           students.push(name)
           rollbar.log(`${name} was added to the list`)
           res.status(200).send(students)
       } else if (name === ''){
        rollbar.warning('someone entered a blank string')
           res.status(400).send('You must enter a name.')
       } else {
        rollbar.warning(`${name} already exists`)
           res.status(400).send('That student already exists.')
       }
   } catch (err) {
    rollbar.critical(`adding a student failed`)
       console.log(err)
   }
})

app.delete('/api/students/:index', (req, res) => {
    const targetIndex = +req.params.index
    
    students.splice(targetIndex, 1)
    rollbar.
    res.status(200).send(students)
})

const port = process.env.PORT || 5050

app.listen(port, () => console.log(`Server listening on ${port}`))
