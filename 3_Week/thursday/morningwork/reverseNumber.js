

let counter = 0

const reverse = (num) => {
    let reverseNum = 0
    while(num > 0){
        let digit = num % 10
        reverseNum = (reverseNum * 10) + digit
        num = Math.floor(num/10)
    }
    return reverseNum
    
}


console.log(reverse(3122))

