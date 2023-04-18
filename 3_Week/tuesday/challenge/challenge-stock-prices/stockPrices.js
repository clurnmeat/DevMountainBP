const best = (arr) => {
    let lowestNum = arr[0]
    let profit = 0
    arr.forEach((el, idx)=> {
        let currentEl = el
        if(currentEl < lowestNum){
            lowestNum = currentEl
        } else if(currentEl - lowestNum > profit) {
            profit = currentEl - lowestNum
        }
})
 return profit
}
console.log(best([15, 10, 20, 22, 1, 9]))