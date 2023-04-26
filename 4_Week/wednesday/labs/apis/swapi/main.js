let getResidentsBtn = document.querySelector("button");
let body = document.querySelector("body");

let baseUrl = "https://swapi.dev/api/";

const btnClicked = (event) => {
  axios.get(`${baseUrl}/planets/?search=Alderaan`).then((res) => {
    residentArr = res.data.results[0].residents;
    console.log(residentArr);
    residentArr.forEach((el) => {
      axios
        .get(el)
        .then((res, req) => {
          let name = res.data.name;
          console.log(res.data.name);
          let createh2 = document.createElement("h2");
          createh2.innerHTML = name;
          body.appendChild(createh2);
        })
        .catch((err) => console.log(err));
    });
  });
};

getResidentsBtn.addEventListener("click", btnClicked);
