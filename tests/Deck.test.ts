import { PokerDealer } from '../src/classes/Dealer';
import { Deck } from '../src/classes/Deck';

const cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const suits = [0, 1, 2, 3];
describe('Deck', () => {
    test('Deck should have a constructor', () => {
        const deckInstance = new Deck(cards, suits, 5, 3);
        expect(deckInstance).toBeTruthy()
    });
    test('Deck should call a PokerDealer when shuffling', () => {
        const deckInstance = new Deck(cards, suits, 5, 3);
        let PDealer: jest.SpyInstance;
        PDealer = jest.spyOn(deckInstance, 'runShuffling');
        deckInstance.runShuffling()
        expect(PDealer).toHaveBeenCalled();
    });
    test('Deck should call a PokerDealer when getDraw', () => {
        const deckInstance = new Deck(cards, suits, 5, 3);
        let PDealer: jest.SpyInstance;
        PDealer = jest.spyOn(deckInstance, 'getDraw');
        deckInstance.getDraw()
        expect(PDealer).toHaveBeenCalled();
    });
    test('Deck should call a Dealer when getDrawResults', () => {
        const deckInstance = new Deck(cards, suits, 5, 3);
        let PDealer: jest.SpyInstance;
        PDealer = jest.spyOn(deckInstance, 'getDrawResults');
        deckInstance.getDrawResults(['3h', '4d', '9c', '10s', '10h']);
        expect(PDealer).toHaveBeenCalled();
    });
    test('It should return the list of cards', () => {
        const deckInstance = new Deck(cards, suits, 5, 3);
        expect(deckInstance.getCards).toBeInstanceOf(Object);
    });
});