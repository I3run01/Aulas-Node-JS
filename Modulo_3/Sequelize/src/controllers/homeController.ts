import { Request, Response } from "express";
import {Product} from '../models/Product'
import { User } from "../models/User";

export const home = async (req: Request, res: Response )=> {
    let user = await User.findAll()




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