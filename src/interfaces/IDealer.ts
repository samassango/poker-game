import { Card } from "../classes/Card";

export interface IDealer {
    dealerDraw: () => Card[];
    shufflingCards: () => string;
}