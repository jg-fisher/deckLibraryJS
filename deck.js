// deck of cards library

// deck class for shuffling, dealing
module.exports = class Deck {
	constructor() {
		this.deck = []
		this.dealt_cards = []
	}

	// generates a deck of cards
	generate_deck () {

		// creates card generator function
		let card = (suit, value) => {
            		let name = value + ' of ' + suit;
			//returns key and values into each instance of the this.deck array
            		return {'name': name, 'suit': suit, 'value':value}
       	 	}

		let values = ['2', '3','4','5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
		let suits = ['Clubs', 'Diamonds', 'Spades', 'Hearts']

		for ( let s = 0; s < suits.length; s++ ) {
		        for ( let v = 0; v < values.length; v++ ) {
               			this.deck.push(card(suits[s], values[v]))
        		}
		}
	}

	// prints the deck of card objects
	print_deck () {
		if (this.deck.length === 0) {
			console.log('Deck has not been generated. Call generate_deck() on deck object before continuing.')
		}
		else {
			for ( let c = 0; c < this.deck.length; c++ ) {
	       			console.log(this.deck[c])
			}
		}
	}

	// shuffle the deck
	shuffle () {
  		for( let c = this.deck.length -1; c >= 0; c--){
            		let tempval = this.deck[c];
            		let randomindex = Math.floor(Math.random() * this.deck.length);
			
			//ensures that the randome index isn't the same as the current index. It runs the function again if this returns as true
            			while(randomindex == c){ randomindex = Math.floor(Math.random() * this.deck.length)}
            		this.deck[c] = this.deck[randomindex];
            		this.deck[randomindex] = tempval;
        	}
	}

	// deal a number cards
	deal (num_cards) {

                let cards = []

                for ( let c = 0; c < num_cards; c++ ) {
                        let dealt_card = this.deck.shift()
                        cards.push(dealt_card)
                        this.dealt_cards.push(dealt_card)
                }

                return cards
        }

	replace () {
		this.deck.unshift(this.dealt_cards.shift())
	}

	clear_deck () {
		this.deck = []
	}
}
