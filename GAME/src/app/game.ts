export interface Game {
    name: string;
    price: number;
    pressRatingPercentage: number;
    userRating: number;
    releaseDate: Date;
    shopReference: string;
    isAvailable: string;
    tags?: Map<string, string>;
}