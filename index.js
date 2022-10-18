// Code your solutions in this file

function writeCards(array) {
    let returnArray = [];
    for (let i = 0; i < array.length; i++) {
        returnArray.push(`Thank you, ${array[i]}, for the wonderful surprise gift!`);
    }
    return returnArray;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        --number;
    }
}