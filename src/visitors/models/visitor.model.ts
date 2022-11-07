import { DataTypes } from "sequelize";
import {
    AfterCreate,
    Column,
    Model,
    PrimaryKey,
    Table,
} from "sequelize-typescript";

@Table({
    tableName: "visitor",
})
export class Visitor extends Model {
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