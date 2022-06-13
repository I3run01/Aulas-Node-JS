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
        autoIncrement: true,
        type: DataTypes.INTEGER
    },

    nome: {
        type: DataTypes.STRING,

        //Altera um dado e depois recebe
        get() {
            return String(this.getDataValue('nome')).toUpperCase()
        }
    },

    //Campo que não existe no BD, serve para auxiliar o código
    firstLetterName: {
        type: DataTypes.VIRTUAL,
        get() {
            let nome: string = this.getDataValue('nome')
            return nome[0]
        }
    },

    idade: {
        type: DataTypes.INTEGER,
        defaultValue: 18,

        //altera um valor e depois envia
        set(value: number) {

            if(this.idade < 18)  this.setDataValue('idade', 18)
           
        }
    },
}, 
{
    tableName: 'user',
    timestamps: false
})