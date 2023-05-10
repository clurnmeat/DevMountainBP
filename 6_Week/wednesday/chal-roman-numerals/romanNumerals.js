const numberLine = ['I', 'V', 'X', 'L', 'C', 'D', 'M' ]




const toRomanNumural = (num) => {
    const newString = []
    if(num > 1 && num != 5 && num < 5){
       newString.push(numberLine[0].repeat(num)) 
    }   else if(num == 5) {
        newString.push(numberLine[1])
        
    } else if(num > 5 && num < 10){
        newString.push(numberLine[1] + numberLine[0].repeat(num - 5))
    } else if(num > 1 && num != 5 && num < 5){
        newString.push(numberLine[0].repeat(num))} else if(num == 10){
            newString.push(numberLine[2])
        } else if(num > 10 && num < 50 && num != 10){
        newString.push(numberLine[2] + numberLine[0].repeat(num - 10))} else if(num == 50)
        
    return newString[0]
    
    
    
}

console.log(toRomanNumural(11))