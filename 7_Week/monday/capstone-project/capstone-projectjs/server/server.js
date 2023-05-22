require( 'dotenv' ).config()
const path = require('path')
const cors = require( 'cors' )
const express = require( 'express' );
const { STATUS_CODES } = require( 'http' );
const app = express()


// middleware
app.use( express.json() );
app.use(cors())

const {addTodb, getHomePage} = require('../public/static/controller/userController')

const {changeMap} = require('../public/static/controller/mapsController')

// routes
app.get( '/', getHomePage) 

app.put( '/:question', addTodb)

app.post('/maps/:zipcode',changeMap )









app.listen(5005, () => console.log("Jaminin on 5005"))
