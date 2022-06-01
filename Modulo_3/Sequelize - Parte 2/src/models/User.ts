import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface UserInstance extends Model {
    id: number
    nome: string
    idade:number
}

export const User = sequelize.define<UserInstance>('User', {
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },

    nome: {
        type: DataTypes.STRING
    },

    idade: {
        type: DataTypes.INTEGER,
        defaultValue: 18
    }
}, 
{
    tableName: 'user',
    timestamps: false
})