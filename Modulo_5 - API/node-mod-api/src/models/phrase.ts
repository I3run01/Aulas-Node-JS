import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../instaces/SQL'

export interface PhaseInstance extends Model {
    id: number,
    author: string,
    txt: string
}

export const Phrase = sequelize.define<PhaseInstance>('Phrase', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },

    author: DataTypes.STRING,
    txt: DataTypes.STRING
}, {
    tableName: 'phrases',
    timestamps: false
})