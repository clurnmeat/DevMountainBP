require( 'module' );
const questionDb = ["What is a mason really?", "How do they work?"]

module.exports = {
    addTodb:( req, res ) =>
    {
        let data = req.params.question
        questionDb.push({data})
        res.status( 200 ).send( `Question added` )
        return
    
    },
    getHomePage: ( req, res ) =>
    {
        res.sendFile( path.join( __dirname, '../public/' ) )
        return
    },
    
}