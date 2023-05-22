
const questionBox = document.querySelector('#submit');
const tf = document.getElementsByClassName('tf');
const map = document.getElementById('iframe');
const takeMeThereBtn = document.getElementById( 'take-me-there' )


questionBox.addEventListener("click", async (event) => {
  event.preventDefault();
  const question = document.querySelector('#question').value;
  if (question) {
    try {
      const res = await axios.put(`http://localhost:5005/${question}`, question);
      alert(res.data);
    } catch (err) {
      console.log(err);
    }
  }
});


for (let i = 0; i < tf.length; i++) {
  tf[i].addEventListener('click', async (event) => {
      const selectedOption = event.target.value;
      if ( selectedOption== 'false' )
      {
        alert('Try Again!')
      } else
      {
          alert('Correct!')
    }
  });
}

takeMeThereBtn.addEventListener('click', async (event) => {
  event.preventDefault();

  
  const zipcodeInput = document.getElementById('zipcode');
  const zipcodeValue = zipcodeInput.value; // Fixed: need to get value of input

  if (!zipcodeValue) {
    alert('Please enter a valid zipcode.');
    return;
  }

  try {
    const res = await axios.post( `http://localhost:5005/maps/zipcode`, { zipcode: zipcodeValue } );
    if ( res )
    {
      alert(res.data)
    } 
  } catch (error) {
    console.error(error);
    alert('There was an error processing your request. Please try again later.');
  }
});
