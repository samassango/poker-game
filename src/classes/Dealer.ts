
import { Dealer } from "card-dealer";
import { IDealer } from "../interfaces/IDealer";
import { Card } from "./Card";



export class PokerDealer extends Dealer<Card> implements IDealer {
    private noOfDraw: number;
    private shufflingNo: number;
    public constructor(cards: Card[], numberOfDraw: number, shufflingNo: number) {
        super(cards);
        this.noOfDraw = numberOfDraw;
        this.shufflingNo = shufflingNo;
    }
    public dealerDraw(): Card[] {
        return this.draw(this.noOfDraw);
    }
    public shufflingCards(): string {
        let shuffling: string = '';
        for (let _ of (new Array(this.shufflingNo))) {
            this.shuffle();
            shuffling += 'Shuffling ... ';
        }
        return shuffling;
    }
}