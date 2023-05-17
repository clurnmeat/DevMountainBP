let arr = [10, 20, 14, 16, 18]
let arr2 = [30, 23, 54, 33, 96]



const smallestDiff = (arr, arr2) =>{
    const diffArr = []
    arr.forEach((el, indx) => {
    diffArr.push(arr2[indx] -= el)
    })
    diffArr.sort((a, b) => a-b)
    return diffArr[0]
}

console.log(smallestDiff(arr, arr2))
