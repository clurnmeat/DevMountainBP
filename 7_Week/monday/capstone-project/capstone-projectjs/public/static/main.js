
const questionBox = document.querySelector('#submit');
const tf = document.getElementsByClassName('tf');
const map = document.getElementsByTagName('iframe');

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




