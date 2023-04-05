/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 


// create a variable for jon and jamie's Attack

let jonSnowAttack = 25
let jamieLannisterAttack = 55

// Before the battle begins, Jon and Jamie decide to compare attack strengths to get insight into who might win this battle. Using an if-else statement, console.log who has the greater attack strength.

if(jonSnowAttack > jamieLannisterAttack){
    console.log(`jon has a greater attack`);
} else {
    console.log(`jamie has greater attack`);
}

// Jamie, knowing that he is superior, initiates a fight with jon. Let's create some additional stats for Jon Snow so we can see how this plays out. 
// crete two variables for jon for his health and defense

let jonSnowHealth = 100
let jonSnowDefense = 0

// Jamie attacks first -use an if/else statement to determine if jonshow can survive the attack. If he does not, console.log "Jon Snow has been slain." Otherwise, console.log Jon Snow's health.

if(jonSnowHealth <= jamieLannisterAttack){
    console.log(`Jon snow has been slain`)
} else {
    jonSnowHealth -= jamieLannisterAttack
    console.log(jonSnowHealth)
}

// Increase Jons defense by 25.

jonSnowDefense += 25

// jamie attacks again, use if or else to determine if he survives the attack. 

if((jonSnowHealth+jonSnowDefense) <= jamieLannisterAttack) {
    console.log(`Jon snow has been slain`);
   

} else {
    jonSnowHealth = jonSnowDefense + jonSnowHealth -jamieLannisterAttack
    console.log(jonSnowHealth);
}


// one of the town's people, obviously wanting Jon snow to win, throws jon a health kit. This health kit can raise jon's heatlth by 50pts. However, Jon's health cannot exceed 100. Using if else statement, raise jon's health to the appropriate level.

if((jonSnowHealth + 50) >= 100){
    jonSnowHealth = 100
} else {
    jonSnowHealth += 50
}


// const stateList = [true, false]

let coinLandsHeads = false

if (coinLandsHeads) {
    console.log(`the fight continues`)
} else {
    console.log(`jon is allowed to flee`)
}


// for (let i=0; i < 5; i++){
//     if (jonSnowHealth < 0){
//         console.log(`jon has been slain`);
//         break
//     }


//     jonSnowHealth = jonSnowHealth + jonSnowDefense - jamieLannisterAttack
//     console.log(jonSnowHealth)
// }


// Demonstrate while loop of jamie attacking jon until he's slain

while (jonSnowHealth > 0){
    jonSnowHealth = jonSnowHealth - (jamieLannisterAttack - jonSnowDefense)
    if(jonSnowHealth <= 0) {
        console.log(`jon has been slain`)
        break
    }
    console.log(`jon snow health is ${jonSnowHealth}`)
}