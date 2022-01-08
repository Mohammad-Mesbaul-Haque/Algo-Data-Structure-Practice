function createCharMap(string) {
    const charMap = {};
    for(let character of string){
        if (charMap[character]) {
            charMap[character]++;
        } else{
            charMap[character] = 1;
        }
    }
    return charMap;
}

function repeatedCharChecker(str) {
    const charMap = createCharMap(str);
    for(let char in charMap) {
        if (charMap[char] > 1) {
            return true;
        }
    }
     return false;
}


console.log(repeatedCharChecker('dhaka'));
console.log(repeatedCharChecker('khulna'));