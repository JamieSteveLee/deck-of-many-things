var app = new Vue({
	el: '#app',
	data: {
		selectedDeck: 'standard',
		drawData: {
			currentDeck: [],
			history: [],
			lastCard: ''
		}
	},
	methods: {
		shuffle: function(array) {
			var currentIndex = array.length, temporaryValue, randomIndex;
			while (0 !== currentIndex) {
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;
				temporaryValue = array[currentIndex];
				array[currentIndex] = array[randomIndex];
				array[randomIndex] = temporaryValue;
			}
			return array;
		},
		getCard: function() {
			if(!this.drawData.currentDeck.length) this.drawData.currentDeck = window[this.selectedDeck].slice(0);
			this.shuffle(this.drawData.currentDeck);

			this.drawData.lastCard = this.drawData.currentDeck[0];
			this.drawData.history.unshift(this.drawData.currentDeck[0]);

			// If remove, remove from current deck
			if(this.drawData.currentDeck[0].removeCard) this.drawData.currentDeck.shift();
		}
	}
});

// https://archive.org/details/tsr02003supplement1greyhawk