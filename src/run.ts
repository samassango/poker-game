import { Suit } from "./classes/Card";
import { Deck } from "./classes/Deck";
class RunApp {
    private suits: Suit[] = [Suit.Spades, Suit.Diamonds, Suit.Clubs, Suit.Hearts];
    private cardsArray: string[] = [
        'A',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'Q',
        'K'
    ];
    public constructor() { }
    public run(): void {
        const cards = new Deck(this.cardsArray, this.suits, 5, 3);
        let displayCards: string = '';
        let cardRules: string[] = [];
        console.info(cards.runShuffling());
        for (let card of cards.getDraw()) {
            displayCards += card.name + ' ';
            cardRules.push(card.cardRank + (Suit[card.cardSuit].substr(0, 1)).toLowerCase());
        }
        console.info(displayCards);
        console.log("You have: " + cards.getDrawResults(cardRules).name);
    }
}

new RunApp().run();