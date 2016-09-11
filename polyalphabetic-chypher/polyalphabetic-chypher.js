var PAChypher = function() {
	// Depends on CeaserChypher.
	var ceaserChypher = CeaserChypher();

	return {
		generateKey: function() {
			var keyWord = 'verystrongkey';
			// key is an array of numbers, representing the code of every letter in the keyword.
			return keyWord.split('').map(function(letter) {return letter.charCodeAt(0);});
		},
		encrypt: function(text, key) {
			var keyLength = key.length;
			return text.split('').map(function(letter, index) {
				var keyIndex = index % keyLength;
				return ceaserChypher.encrypt(letter, key[keyIndex]);
			}).join('');
		},
		decrypt: function(encryptedText, key) {
			var keyLength = key.length;
			return encryptedText.split('').map(function(letter, index) {
				var keyIndex = index % keyLength;
				return ceaserChypher.decrypt(letter, key[keyIndex]);
			}).join('');
		}
	};
};
