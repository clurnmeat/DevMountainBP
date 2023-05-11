const ar = [23, 2, 3, 4, 5]
const sortProduct = (arr) => {
    let newArr = []
    let dividenArr = []
    for(let i=0; i<arr.length; i++){
        let product = arr[i] * (i + 1)
        newArr.push(product)
        newArr.sort((a, b) => a - b)
        newArr = newArr.map((el, indx) => {
            return el / ( indx + 1)
   })
    }
    return newArr 
}

console.log(sortProduct(ar))