var app = new Vue({
	el: '#app',
	data: {
		windowHeight: '100vh',
		gameLoaded: false,
		selectedDeck: 'standard',
		fullImage: false,
		menuOpen: false,
		drawData: {
			currentDeck: [],
			history: [],
			currentCard: ''
		},
		options: {
			draconic: false
		},
		startCard: {
			image: "standard/x_card0.jpg",
			longDescription: "Click \"DRAW\" to get a card from the deck. Each time a card is drawn from the deck, it is replaced (making it possible to draw the same card twice) unless the draw is The Jester (Red Joker) or The Fool (Black Joker), in which case the card is discarded from the deck.\n\nThe artwork for these cards was created by George Barr and originally appeared in Dragon Magazine #148."
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
			// If first draw, set current deck
			if(!this.drawData.currentDeck.length) this.drawData.currentDeck = window[this.selectedDeck].slice(0);

			// Shuffle deck
			this.shuffle(this.drawData.currentDeck);

			// Show top card of shuffled deck, and add to history
			this.drawData.currentCard = this.drawData.currentDeck[0];
			this.drawData.history.unshift(this.drawData.currentDeck[0]);

			// If remove, remove from current deck
			if(this.drawData.currentDeck[0].removeCard) this.drawData.currentDeck.shift();

			// Close menu
			this.menuOpen = false;

			// Scroll to top of long description
			setTimeout(function() {
				document.getElementById('card-info').scrollTop = 0;
			}, 100);

			// Save game to local storage
			this.saveGame();
		},
		setCardFromHistory: function(historyIndex) {
			this.drawData.currentCard = this.drawData.history[historyIndex];
		},
		toggleView: function() {
			this.fullImage == false ? this.fullImage = true : this.fullImage = false;
		},
		toggleMenu: function() {
			this.menuOpen == false ? this.menuOpen = true : this.menuOpen = false;
		},
		saveGame: function() {
			var saveDrawData = JSON.stringify(this.drawData);
			localStorage.setItem('jambon_domt', saveDrawData);
		},
		loadGame: function() {
			var loadDrawData = JSON.parse(localStorage.getItem('jambon_domt'));
			if(loadDrawData) {
				this.drawData = loadDrawData;
			} else {
				this.drawData.history.unshift(this.startCard);
				this.drawData.currentCard = this.startCard;
			}
			this.gameLoaded = true;
		},
		resetGame: function() {
			var confirmReset = confirm('Are you sure you want to reshuffle the deck?');
			if(confirmReset) {
				localStorage.removeItem('jambon_domt');
				location.reload();
			}
		},
		getWindowHeight(event) {
			this.windowHeight = window.innerHeight + 'px';
		}
	},
	beforeMount() {
		this.loadGame();
	},
	mounted() {
		this.$nextTick(function() {
			window.addEventListener('resize', this.getWindowHeight);
			this.getWindowHeight()
		})
	},
	beforeDestroy() {
		window.removeEventListener('resize', this.getWindowHeight);
	}
});
