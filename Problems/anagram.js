/*
 * Title: Anagram Explanation
 * Description: Example of anagram.
 * Author: Mohammad Mesbaul Haque
 * Github link: https://github.com/mmesba
 * Date: 04/01/2022
 */
 

function createCharMap(str) {
    let charMap = {};
    for(let character of str.replace(/[^\w]/g, '')) {
        if(charMap[character]){
            charMap[character]++;
        } else{
            charMap[character] = 1;
        }
    }
    return charMap;
}


function anagrams(stringOne, stringTwo) {
    const charMapOne = createCharMap(stringOne);
    const charMapTwo = createCharMap(stringTwo);

    if (Object.keys(charMapOne).length !== Object.keys(charMapTwo).length) {
        return false;
    } 

    for(let char in charMapOne) {
        if(charMapOne[char]  !== charMapTwo[char]) {
            return false;
        }
    }
    // if two  defined conditions above fails then we can return true
    return true;
}


console.log(anagrams('fairy tales', 'rail safety'));


// Solution 2 to find an anagram
// Psudo code
// 1. First of all we clean both of the strings that means remove all special characters
// 2. The definition of anagram says that both of the string's chars will be same that lead us to sort strings and compare.


// first we define  a sorter function with various methods
function sortString(string) {
    return string.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}


function anagram2(str1, str2) {
    const cleanedString = sortString(str1);
    const cleanedString2 = sortString(str2);
    
    return  cleanedString === cleanedString2;
}

console.log(anagram2('debit card', 'bad credit'));