let arr = [23, 2, 3, 4, 5]
const sortByProduct = (arr) => {
    let newArr = []
    let counter = 0
    
    for(let i=0; i<arr.length; i++){
        let product = arr[i] * (i + 1)
        let value = arr[i]
        newArr.push({product, i, value})
        newArr.sort((a, b) => a.product - b.product)
        
    }
    return newArr.map((el) => {return el.value})
    


    
   
    
}

console.log(sortByProduct(arr))