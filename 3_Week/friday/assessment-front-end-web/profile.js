const btnList = document.querySelectorAll("button");

const favColorFunc = (event) => {
  alert(`${event.target.textContent} is Green`);
};
const favPlaceFunc = (event) => {
  alert(`${event.target.textContent} is Minnesota`);
};
const favRitualFunc = (event) => {
  alert(`${event.target.textContent} is making tea`);
};

btns = Array.from(btnList);

btns.forEach((el, idx) => {
  if (idx === 0) {
    el.addEventListener("click", favColorFunc);
  } else if (idx === 1) {
    el.addEventListener("click", favPlaceFunc);
  } else if (idx === 2) {
    el.addEventListener("click", favRitualFunc);
  }
});

console.log(btnList);
