const new_list = []
for (i = 0; i < 50; i++ ){
    new_list.push(i);

};



const list = [0, 1, 2, 3, 4]
for (i = 0; i < 50; i++) {
    if ( list[i] !== (i) ) {
        list.push(i)
    }

}
console.log(list)