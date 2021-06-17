import { Dealer } from "card-dealer";
import { IDeck } from "../interfaces/IDeck";
var Hand = require('pokersolver').Hand;

import { Card, Suit } from "./Card";
import { PokerDealer } from "./Dealer";

export class Deck implements IDeck {
    public cards: Card[] = [];
    public dealer: Dealer<Card>;
    public appDealer: PokerDealer;
    public numberOfDraw: number;
    public shufflingNo: number;
    public constructor(cardArray: string[], suitArray: Suit[], draw?: number, shuffling?: number) {
        this.createCards(cardArray, suitArray);
        this.appDealer = new PokerDealer(this.cards, draw, shuffling)
    }

    private createCards(cardArray: string[], suitArray: Suit[]): void {
        for (let i = 0; i < suitArray.length; i++) {
            for (let x = 0; x < cardArray.length; x++) {
                this.cards.push(new Card(cardArray[x], suitArray[i]));
            }
        }
    }

    public get getCards(): Card[] {
        return this.cards;
    }

    public runShuffling(): string {
        return this.appDealer.shufflingCards();
    }

    public getDraw(): Card[] {
        return this.appDealer.dealerDraw();
    }

    public getDrawResults(card: string[]): any {
        return Hand.solve(card);
    }
}