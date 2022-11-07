import { DataTypes } from "sequelize";
import {
    Column,
    Default,
    Model,
    PrimaryKey,
    Table,
} from "sequelize-typescript";

@Table({
    tableName: "visitor",
})
export class Visitor extends Model {
    declare created_at: Date;

    @PrimaryKey
    @Column
        id: number;

    @Column({ type: DataTypes.JSON })
        data: JSON;

    @Column
        ip: string;

    @Default(false)
    @Column
        hidden: boolean;
}
