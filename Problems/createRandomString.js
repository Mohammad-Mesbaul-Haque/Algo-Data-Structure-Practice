// Random string creator function
function createRandomString(stringLength) {
    let strLength = stringLength;
    strLength = typeof(stringLength) === 'number' && stringLength > 0 ? stringLength : false;

    if(strLength){
        let possibleCharacters = 'abcdefghijklmAQZWOd)(*&^nopqrstuvwxyz123456789!@#$%';
        let output = '';
        for(let i = 1; i <= strLength; i++){
            let randomCharacter = possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));

            output += randomCharacter;
        }
        return output;
    }
    return false;
}
// call function
console.log(createRandomString(10));
console.log(createRandomString(5));
console.log(createRandomString(8));
console.log(createRandomString(12));
console.log(createRandomString(15));