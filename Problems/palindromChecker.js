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
        return true;
    } else {
        return false;
    }
}


console.log( palindrome('madam'));
console.log( palindrome('hello'));