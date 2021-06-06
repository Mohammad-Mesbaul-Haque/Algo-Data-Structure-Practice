// string  reverse 
//
function strReverse(str) {
    return str.split('').reverse().join('')
}

console.log(strReverse('I love you'));


//second solution
function strReverse2(str) {
    let reversedStr = '';
    for(let character of str){
        reversedStr = character + reversedStr;
    }
    return reversedStr;
}

console.log(strReverse2('I love you'));

//third solution
function strReverse3(str) {
    return str.split('').reduce((reversed, character) => character + reversed, '');
}

console.log(strReverse3('I love you'));