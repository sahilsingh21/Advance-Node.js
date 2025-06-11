const crypto = require('crypto');

// Using AES algorithm with 256-bit key
const algorithm = 'des-ecb';
const key = crypto.randomBytes(32); //AES key must be 32 bytes
const iv = crypto.randomBytes(16); // Intialization vector must be 16 bytes
const plaintext = 'Sensitive Data';

// Encrypting the plaintext
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update(plaintext, 'utf8', 'hex');
encrypted += cipher.final('hex');

console.log('Encrypted text:', encrypted);

//Decrypting the ciphertext
const decimal = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');


console.log('Decrypted text:', decrypted);