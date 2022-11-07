import { DataTypes } from "sequelize";
import {
    Column,
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

    @Column({ type: DataTypes.JSON})
        data: JSON;

    @Column
        ip: string;

    @Column({ defaultValue: false })
        hidden: boolean;
}
