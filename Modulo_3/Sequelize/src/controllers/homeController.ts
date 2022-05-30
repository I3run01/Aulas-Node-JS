import { Request, Response } from "express";

import { sequelize } from "../instances/mysql";

import {Product} from '../models/Product'

export const home = async (req: Request, res: Response )=> {
    try {
        await sequelize.authenticate()
        console.log('conexão estabelecida com sucesso')
    } catch(error) {
        console.log('Deu problema', error)
    }

    let age: number = 20
    let showold:boolean = false

    if(age > 25) {
        showold = true
    }

    let list = Product.getAll()
    let expensiveList = Product.getPriceAfter(12)

    res.render('pages/home', {

        showold,
        name: 'Bonieky',
        lastName: 'Lacerda',
        Product: list,
        expensive: expensiveList,
        FrasesDoDia: [
            'Estudar faz bem',
            'Vivendo e aprendendo',
            'Sempre em frente'
        ]      
    })  
}