export enum Suit {
    Spades,
    Diamonds,
    Clubs,
    Hearts,
};

export class Card {
    public readonly cardRank: string;
    public readonly cardSuit: number;

    public constructor(private rank: string, private suit: number) {
        this.cardRank = rank;
        this.cardSuit = suit;
    }

    public get getCardRank(): string {
        return this.cardRank;
    }

    public get getCardSuit(): number {
        return this.cardSuit;
    }
    public get name(): string {
        return this.cardRank + ' of ' + Suit[this.cardSuit];
    }
}