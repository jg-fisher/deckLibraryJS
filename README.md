# deckLibraryJS
JS library for a deck of cards.

Import library.

    const deck = require('./deck.js')
    
Initialize the Deck object.

    let Deck = new deck()

Generate the deck of cards.

    Deck.generate_deck()

Print the array of card objects in the deck.

    Deck.print_deck()
    
Shuffle the deck randomly.

    Deck.shuffle()

Deal a card - returns card object.

    Deck.deal()

Put most recently dealt card back on top of deck.

    Deck.replace()

Remove the current deck.

    Deck.clear_deck()
    
