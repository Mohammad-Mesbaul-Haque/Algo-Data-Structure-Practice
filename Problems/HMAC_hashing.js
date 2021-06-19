// The Hmac class is a utility for creating cryptographic HMAC digests. It can be used in one of two ways:

// As a stream that is both readable and writable, where data is written to produce a computed HMAC digest on the readable side, or
// Using the hmac.update() and hmac.digest() methods to produce the computed HMAC digest.
// The crypto.createHmac() method is used to create Hmac instances. Hmac objects are not to be created directly using the new keyword.