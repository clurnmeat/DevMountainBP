let query = document.querySelector("input");
let searchBtn = document.querySelector("button");



const sumbitHandler = (event) => {
    event.preventDefault()

    let pokemon = query.value;
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
    .then((res) => {
        let img = document.querySelectorAll(".poke-imgs");
        img.forEach((el) => el.src = res.data.sprites.front_default)
        
  })
  .catch((err) => console.log(err));
}

searchBtn.addEventListener('click', sumbitHandler)


