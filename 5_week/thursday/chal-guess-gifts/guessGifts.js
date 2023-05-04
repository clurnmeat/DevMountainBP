var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];


const guessGifts = (wishlist, presents) => {
    const giftGuess = []
    presents.forEach((element, indx) => {
        if(element.size, element.clatters, element.weight == wishlist[indx].size, wishlist[indx].clatters, wishlist[indx].weight){
            giftGuess.unshift(wishlist[indx].name)
        }
    });
    console.log(giftGuess)
}
guessGifts(wishlist, presents); // must return ["Toy Car", "Mini Puzzle"]