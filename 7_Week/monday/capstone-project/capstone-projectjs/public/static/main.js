
const questionBox = document.getElementById('submit')
const question = document.getElementById('question').innerHTML
const map = document.getElementsByTagName('iframe')

questionBox.addEventListener( "click", ( event ) =>
{
    event.preventDefault()
    axios
        .get( `http://localhost:5005/?question=${question}`, question )
        .then( ( res ) =>
        {   alert(res)
        } )
        .catch( err => console.log( err ) )

})




