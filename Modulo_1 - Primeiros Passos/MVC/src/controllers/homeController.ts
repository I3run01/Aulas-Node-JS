import { Request, Response } from "express";

import {Product} from '../models/Product'

export const home = (req: Request, res: Response )=> {
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