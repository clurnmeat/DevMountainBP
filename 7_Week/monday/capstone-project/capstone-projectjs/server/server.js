require( 'dotenv' ).config()
const path = require('path')
const cors = require( 'cors' )
const express = require( 'express' );
const app = express()


app.use( express.json() );
app.use(cors())
app.use(express.static(path.join(__dirname, '../public')))


app.get( '/', ( res ) =>
{
    res.status(200).send('clear-chief')
})

app.put( `/:question`, ( req, res ) =>{
    
    let data = req.body.value
    
    return res.status(200).send(data)
} )
    

app.listen(5005, () => console.log("Jaminin on 5005"))
