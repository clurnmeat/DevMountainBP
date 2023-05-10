const btn = document.querySelector('button')
const dogbtn = document.querySelector('.dog')


const clickHandler = () => alert('The cat name is: Rascal')
const dogclickHandler = () => alert('The dogs name is Rascal')



btn.addEventListener('click', clickHandler)
dogbtn.addEventListener('click', dogclickHandler)
