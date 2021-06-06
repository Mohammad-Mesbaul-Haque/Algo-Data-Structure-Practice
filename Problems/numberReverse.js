/*
 * First we convert given number to string
* Then we reverse the converted string 
* Lastly we convert the reversed string into number again
 */

// solution 1
function reverseNum(num) {
    let reversed =  num.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(num);
}

console.log(reverseNum(-3000));