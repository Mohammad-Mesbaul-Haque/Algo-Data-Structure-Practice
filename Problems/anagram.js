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


console.log(anagrams('blah', 'halb'));


