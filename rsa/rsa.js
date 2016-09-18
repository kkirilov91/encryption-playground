var RSA = function() {
	var privateKey = {
		// p1: 53,
		// p2: 59,
		// d: (k * phiN + 1) / e
	};
	var keyGen = function () {

		// random prime numbers
		var p1 = 53, p2 = 59;
		// public key
		var n = p1 * p2;

		var phiN = (p1 - 1) * (p2 - 1);
		// small exponent, that does not share factor with phiN
		// public key
		var e = 3;
		// e*d = k*phiN + 1
		var d = (2 * phiN + 1) / 3;
		
		privateKey.p1 = p1;
		privateKey.p2 = p2;
		privateKey.d = d;

		// publicKey
		return {
			public: {
				n: n,
				e: e
			},
			private: {
				p1: p1,
				p2: p2,
				d: d
			}
		}
	}

	var encrypt = function(message, publicKey) {
		var asNumbers = numberize(message);
		return asNumbers.map(function(number) {
			// number^e mod n = encryped(number)
			return Math.pow(number, publicKey.e) % publicKey.n;
		});
	};

	var decrypt = function(messageNumbers, privateKey) {
		var decryptedNumbers = messageNumbers.map(function(encyptedNumber) {
			// encyprted(number) = number^e mod n; encNumber^d mod n = number 
			return Math.pow(encyptedNumber, privateKey.d) % (privateKey.p1 * privateKey.p2);
		});

		return denumberize(decryptedNumbers);
	};

	var numberize = function(message) {
		return message.split('').map(function(letter) {
			return letter.charCodeAt(0);
		});
	};

	var denumberize = function(numbers) {
		return numbers.map(function(number) {
			return String.fromCharCode(number);
		}).join('');
	};

	return {
		keyGen: keyGen,
		encrypt: encrypt,
		decrypt: decrypt
	}
};