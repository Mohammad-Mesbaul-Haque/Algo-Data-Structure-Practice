/*
 * Title: Palindrome Checker
 * Description: Simple palindrome checker algorithm
 * Author: Mohammad Mesbaul Haque
 * Github link: https://github.com/mohammad-mesbaul-haque
 * Date: 19/07/2021
 */

// trick 1
function palindrome(string) {
    const reversedStr = string.split('').reverse().join('');
    if (string === reversedStr) {
        return string + ' is palindrome';
    } else {
        return string + ' is not a palindrome';
    }
}


console.log( palindrome('madam'));
console.log( palindrome('hello'));


// Trick 2
function palindrome2(string) {
    const strArray = string.split('');
    for(let i = 0; i < strArray.length; i++){
        if (strArray[i] === strArray[strArray.length - 1]) {
            return string + ' is palindrome';
        } else {
            return string + ' is not a palindrome';
        }
    }
}


console.log( palindrome2('hello'));
console.log( palindrome2('madam'));