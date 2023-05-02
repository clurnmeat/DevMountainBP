const phoneNumber = (arr) => {
    let numset1 = arr.slice(0, 3).join('')
    let numset2 = arr.slice(3, 6).join('')
    let numset3 = arr.slice(6).join('')
    let number = `${numset1}-${numset2}-${numset3}`
    return number

}

console.log(phoneNumber([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]))