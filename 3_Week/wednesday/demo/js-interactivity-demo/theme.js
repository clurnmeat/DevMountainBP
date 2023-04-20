console.log('Theme.js connected')



let themeBtns = document.querySelectorAll('.theme-buttons')
let body = document.querySelector('body')
let main = document.querySelector('main')
let btns = document.querySelectorAll('button')



let themeSelector = (evnt) => {
    let theme = evnt.target.textContent;
    body.className = theme;
    main.className = theme;
    for(let i=0; i<btns.length; i++){
        btns[i].className=theme
    }
}

for(let i=0; i<themeBtns.length; i++){
    themeBtns[i].addEventListener('click', themeSelector)
}