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
        },
        offset: 2, //na página 2 offset vai ser 4, pág 3 -> offset: 6....
        limit: 2 //quantos itens vão ser mostrados

        
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

    //bulld + save
    let user04 = User.build({
        nome: 'fulalinho',
    })
    await user04.save()

    //Novo exemplo de buld
    let user06 = User.build({
        nome: 'Beltrano',
    })
    //Fiz alguma coisa
    let idade: number = 27
    user06.idade = idade
    await user06.save()
    

    //código de conversão de nascimento

    //create
    let user05 = await User.create({
        nome: 'Ciclano',
        idade: 39
    })


    res.render('pages/home', {
        user,
        user02,
        user03

    })
    
    
    

}

export const exercicio = async (req:Request, res: Response ) => {
    let nome: string = req.body.nome as string
    let idade: number = Number(req.body.idade as string)

    res.render('pages/exercicio',{
        nome, idade
    })
    
}
