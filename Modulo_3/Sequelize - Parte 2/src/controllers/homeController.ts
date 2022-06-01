import { Request, Response } from "express";
import { User } from "../models/User";
import { Op } from "sequelize";

export const home = async (req: Request, res: Response )=> {

    //Pegando dados no banco de dados por partes
    let user = await User.findAll({
        where: {
            idade: {
                [Op.gte]: 18
            }
        }
    })

    let user02 = await User.findAll({
        where: {
            idade: {
                [Op.gte]: 18
            }
        },

        order: [
            ['nome', 'asc'],
        ]
    })

    let user03 = await User.findAll({
        where: {
            idade: {
                [Op.gte]: 18
            }
        },

        order: [
            ['nome', 'desc'],
            ['nome', 'asc']
        ]
    })


    


    res.render('pages/home', {
        user,
        user02,
        user03

    })  
}