const btn = document.querySelector('button')

const getCat = () => {
    axios.get('http://localhost:4000/api/cat')
        .then(res => alert(res.data))
}

btn.addEventListener('click', getCat)