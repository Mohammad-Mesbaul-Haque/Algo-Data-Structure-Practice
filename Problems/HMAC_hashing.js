// The Hmac class is a utility for creating cryptographic HMAC digests. It can be used in one of two ways:

// As a stream that is both readable and writable, where data is written to produce a computed HMAC digest on the readable side, or
// Using the hmac.update() and hmac.digest() methods to produce the computed HMAC digest.
// The crypto.createHmac() method is used to create Hmac instances. Hmac objects are not to be created directly using the new keyword.

const crypto = require('crypto');
// Secret should be in a secret file or .env or something like that
const mySecret = 'you$cannot$decrypt$fuck$off$bitch$';
let hashFunction = (string)=>{
    if (typeof(string) === 'string' && string.length > 0) {
        let hash = crypto
                .createHmac('sha256', mySecret)
                .update(string)
                .digest('hex')
        return hash;
        }        
        return false;
    }
// invoke the hash function
    console.log(hashFunction('I love you'));
    console.log(hashFunction('I hate you'));
    console.log(hashFunction('I ___ you'));
