
var chypher = RSA();
var text = 'abc';
var key = chypher.keyGen();
var encryptedText = chypher.encrypt(text, key.public);

// encrypt text
console.info('encrypted text should be different from the real one.');
if (text === encryptedText) {
  console.error('Text not encrypted, text:' + text + ' encryptedText: ' + encryptedText);
} else {
  console.log('Text encrypted');
}

console.info('encrypted text should be the same every time.');
var secondEncryptedText = chypher.encrypt(text, key.public);
if (secondEncryptedText.every(function(number) {return encryptedText.includes(number);})) {
  console.error('Text not encrypted twice, secondary encrypted text:' + secondEncryptedText + ' encryptedText: ' + encryptedText);
} else {
  console.log('Text encrypted succesfully for second time');
}

// javascript is not good enough
// decrypt test
console.info('dencrypted text should be the same as the real one.');
var decryptedText = chypher.decrypt(encryptedText, key.private);
if (text !== decryptedText) {
  console.error('Text not decrypted properly, text:' + text + ' dencryptedText: ' + decryptedText);
} else {
  console.log('Text succesfully decrypted');
}

console.info('dencrypted text should be the same every time.');
var secondDecryptedText = chypher.decrypt(encryptedText, key.private);
if (secondDecryptedText !== decryptedText) {
  console.error('Text not decrypted twice, sencodary decrypted text:' + secondDecryptedText + ' decrypted text: ' + decryptedText);
} else {
  console.log('Text encrypted succesfully for second time');
}
