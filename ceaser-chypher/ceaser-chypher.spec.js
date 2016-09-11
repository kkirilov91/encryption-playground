var chypher = CeaserChypher();
var text = 'abc';
var encryptedText = chypher.encrypt(text);

// encrypt text
console.info('encrypted text should be different from the real one.');
if (text === encryptedText) {
  console.error('Text not encrypted, text:' + text + ' encryptedText: ' + encryptedText);
} else {
  console.log('Text encrypted');
}

console.info('encrypted text should be the same every time.');
var secondEncryptedText = chypher.encrypt(text);
if (secondEncryptedText !== encryptedText) {
  console.error('Text not encrypted twice, secondary encrypted text:' + secondEncryptedText + ' encryptedText: ' + encryptedText);
} else {
  console.log('Text encrypted succesfully for second time');
}

// decrypt test
console.info('dencrypted text should be the same as the real one.');
var decryptedText = chypher.decrypt(encryptedText);
if (text !== decryptedText) {
  console.error('Text not decrypted properly, text:' + text + ' dencryptedText: ' + decryptedText);
} else {
  console.log('Text succesfully decrypted');
}

console.info('dencrypted text should be the same every time.');
var secondDecryptedText = chypher.decrypt(encryptedText);
if (secondDecryptedText !== decryptedText) {
  console.error('Text not decrypted twice, sencodary decrypted text:' + secondDecryptedText + ' decrypted text: ' + decryptedText);
} else {
  console.log('Text encrypted succesfully for second time');
}
