import { Model } from 'sequelize-typescript';
export declare class Book extends Model {
    bookName: string;
    authorName: string;
    publishYear: number;
    isAvailable: boolean;
}
