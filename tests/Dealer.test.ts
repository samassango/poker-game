import { Dealer } from 'card-dealer';
import { Card } from '../src/classes/Card';
import { PokerDealer } from '../src/classes/Dealer';

const cards: Card[] = [new Card('A', 1), new Card('2', 1), new Card('3', 1)];

describe('Poker Dealer', () => {
    it('The Dealer should have a constructor', () => {
        const dealerInstance = new PokerDealer(cards, 5, 3);
        expect(dealerInstance).toBeTruthy();
    });

    it("The dealer class should have dealerdraw method", () => {
        const dealerInstance = new PokerDealer(cards, 5, 3);
        expect(dealerInstance.dealerDraw).toBeTruthy();
    });
    it("The dealer class should have shufflingCards method", () => {
        const dealerInstance = new PokerDealer(cards, 5, 3);
        expect(dealerInstance.shufflingCards).toBeTruthy();
    });
    it("ShufflingCards method should return correct results", () => {
        const dealerInstance = new PokerDealer(cards, 5, 3);
        expect(dealerInstance.shufflingCards()).toEqual('Shuffling ... Shuffling ... Shuffling ... ');
    });
});
