import { Model } from 'sequelize-typescript';
export declare class Visitor extends Model {
    id: number;
    data: string;
    ip: string;
    hidden: boolean;
}
