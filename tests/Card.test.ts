import { Card, Suit } from '../src/classes/Card'

describe('Card', () => {
    test('class should have constractor', () => {
        const cardInstance = new Card('A', 1);
        expect(cardInstance).toBeTruthy();
    });
    test('class should have fields ', () => {
        const cardInstance = new Card('A', 1);
        expect(cardInstance.cardRank).toEqual('A');
        expect(cardInstance.cardSuit).toEqual(1)
    });
    test('class return the correct suit', () => {
        const cardInstance = new Card('A', 1);
        expect(cardInstance.getCardSuit).toEqual(1);
    });
    test('class return the correct rank', () => {
        const cardInstance = new Card('A', 1);
        expect(cardInstance.getCardRank).toEqual("A");
    });
    test('class return the correct name', () => {
        const cardInstance = new Card('A', 1);
        expect(cardInstance.name).toEqual("A of Diamonds");
    });
});