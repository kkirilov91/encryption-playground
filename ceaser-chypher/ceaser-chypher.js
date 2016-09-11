var CeaserChypher = function() {

	var generateKey = function() {
		return Math.floor(Math.random() * 127);
	};

	return {
		generateKey: generateKey,
		encrypt: function(text, key) {
			return text.split('').map(function(letter) {
				var shiftedCode = (letter.charCodeAt(0) + key) % 128;
				return String.fromCharCode(shiftedCode);
			}).join('');
		},
		decrypt: function(encryptedText, key) {
			return encryptedText.split('').map(function(letter) {
				var deshiftedCode = letter.charCodeAt(0) - key;
				deshiftedCode = deshiftedCode < 0 ? 128 + deshiftedCode : deshiftedCode;
				return String.fromCharCode(deshiftedCode);
			}).join('');
		}
	};
};
