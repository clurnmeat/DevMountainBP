// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."


let leftParen = []
let rightParen = []
 
const balanceFunct = (strng) => {
    let leftParen = []
    let rightParen = []

    strng.split('').forEach(element => {
        if (element == "(") {
            leftParen.push(element)
        }
        else if (element == ")") {
            rightParen.push(element)
        }
    });

    let length = leftParen.length + rightParen.length

    if (leftParen.length % 2 === 0 && rightParen.length % 2 === 0) {
        return `Balanced`
    } 
    else if (length === 0) {
        return `Balanced`
    } 
    else {
        return `Unbalanced`
    }
}

//Test case using console.log().
console.log(balanceFunct('(('))



