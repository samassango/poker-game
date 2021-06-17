import { Card } from "../classes/Card";

export interface IDeck {
    runShuffling: () => string;
    getDraw: () => Card[];
    getDrawResults: (card: string[]) => any;
}
