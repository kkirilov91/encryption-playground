var PerfectChypher = function() {
	// Depends on PAChypher.
	var paChypher = PAChypher();

	return {
		generateKey: function(text) {
			// In this chypher the key depends on the length of the text message.
			return text.split('').map(function(letter) {return Math.floor(Math.random() * 127);});
		},
		encrypt: paChypher.encrypt,
		decrypt: paChypher.decrypt
	};
};
