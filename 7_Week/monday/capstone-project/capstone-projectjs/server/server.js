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
    return res.status(200)
})

app.put( `/question`, ( req, res ) =>{
    
    return res.status(200).send(req.params.question)
} )
    

app.listen(5005, () => console.log("Jaminin on 5005"))
