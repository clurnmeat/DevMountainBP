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


// routes
app.get( '/', getHomePage) 

app.put( '/:question', addTodb)










app.listen(5005, () => console.log("Jaminin on 5005"))
