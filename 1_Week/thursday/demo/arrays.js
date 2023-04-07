/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/
let backpack = [];
let belt = []
backpack.push(`sword`);
backpack.push("torch");
backpack.push("food");
backpack.push("kleenex");
backpack.push("shield");
backpack.push("clorox");
backpack.push("sweater");


let sword = backpack.splice(0, 1);
belt.push(sword[0])

backpack.push("furcoat");

backpack.pop()





backpack.push("flint", "blanket", "knife", "toothbrush", "cellphone");

// let itemCount = backpack.length;

// console.log(`Item Count: ${itemCount}`);

// let backpack2 = backpack.splice(6,3);
// // console.log(backpack)
// // console.log(backpack2)
// console.log("Backpack inventory: ")
// for (let i=0; i<backpack.length; i++) {
//     console.log(backpack[i])
// }
// console.log("Backpack 2 inventory: ",)
// for (let i=0; i<backpack2.length; i++) {
//     console.log(backpack[i]);
// }


let guessMe = 54;

while(guessMe < 100) {
    if (guessMe % 4 === 0 || guessMe % 5 === 0) {
        guessMe += 25
    } else if (guessMe % 3 === 0) {
        guessMe -= 27;
    } else {
        guessMe += 3
    }
    guessMe += 22
}