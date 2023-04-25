// Write your solution below:
const newArr = []
const myFunct = (strng) => {
    for(let i=0; i<strng.length; i++){


        if(newArr.includes(strng[i])){
            console.log('im in here')
        } else {
            newArr.push(strng[i])
        }
        console.log(newArr)
    }
    return newArr.join('')
    
    
}



console.log(myFunct('oof'))