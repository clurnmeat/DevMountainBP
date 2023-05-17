let arr = [10, 20, 14, 16, 18]
let arr2 = [30, 23, 54, 33, 96]



const smallestDiff = (arr, arr2) =>{
    arr.forEach((el, indx) => {
    return el -= arr2[indx]
    })
}

console.log(smallestDiff(arr, arr2))
