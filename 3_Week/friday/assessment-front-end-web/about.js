const compliment_list = document.querySelectorAll('.compliments')
const catpic = document.querySelector('#catpic')
console.log("hello world");


function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form Submitted!");
}


giveCompliment = (event) => {
	alert(compliment_list.forEach((el, index) => el[index].textContent))
}




let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
catpic.addEventListener('mouseover', giveCompliment)