import { Request, Response } from "express";
import {Product} from '../models/Product'
import { User } from "../models/User";
import { Op } from "sequelize";

export const home = async (req: Request, res: Response )=> {

    //Pegando dados no banco de dados
    let user = await User.findAll()

    let user02 = await User.findAll({
        attributes: ['nome', 'idade']
    })

    let user03 = await User.findAll({
        attributes: {exclude: ['idade']}
    })

    let user04 = await User.findAll({
        where: {nome: 'Paulo', idade: 30}
    })

    let user05 = await User.findAll({
        where: {
            [Op.or]: [
              {idade:55},
              {nome: 'Paulo'}
            ]
        }
    })

    let user06 = await User.findAll({
        where: {
            idade: [55, 90]
        }
    })

    let user07 = await User.findAll({
        where: {
            idade: {
                [Op.gt]:40, //>40
                //[Op.gte]:40, // >= 40
                [Op.lt]:70, // < 40
                //[Op.lte]:40, // <= 40
            }
        }
    })

    let user08 = await User.findAll({
        where: {
            idade: {
                [Op.notIn]: [30, 55]
            }
        }
    })

    let user09 = await User.findAll({
        where: {
            nome: {
                [Op.like]: 'pa%'
            }
        }
    })

    let searchName: string = 'bo'

    let user10 = await User.findAll({
        where: {
            nome: {
                [Op.like]: `%${searchName}%`
            }
        }
    })

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
        ],
        user,
        user02,
        user03,
        user04,
        user05,
        user06,
        user07,
        user08,
        user09,
        user10
    })  
}