console.log("hello world");
const catpic = document.querySelector('#cat-pic');

function handleSubmit(evt) {
  evt.preventDefault();

  alert("Form Submitted!");
}
let count = 0;
giveCompliment = () => {
	let compliment = "";
	const compliment_list = document.querySelectorAll(".compliments");
	for (let i = 0; i < compliment_list.length; i++) {
	  compliment = compliment_list[Math.floor(Math.random() * compliment_list.length)].textContent;
	}
	
	alert(compliment);
};

catpic.addEventListener("mouseover", giveCompliment);
let form = document.querySelector("#contact");
form.addEventListener("submit", handleSubmit);
