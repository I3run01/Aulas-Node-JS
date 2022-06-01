import { Request, Response, urlencoded } from "express";
import { User } from "../models/User";
import { Op } from "sequelize";

export const home = async (req: Request, res: Response )=> {
    
    //Deletando registros do banco de dados

    await User.destroy({
        where: {
            idade: {
                [Op.lte]: 18
            }
        }
    })

    //Deletando um item só

    let resultado = await User.findAll({where: {nome: 'Ciclano'}})
    if (resultado.length > 0 ) {
        let usuario = resultado[0]

        await usuario.destroy()
    }


    // Atualizando os dados de um usuário específico
    let result = await User.findAll({ where: {id: 2}})
    if(result.length > 0) {
        let usuario = result[0]
        usuario.idade = 70

        await usuario.save()
    }

    //Parâmetros da função

    // 1. Dados a serem alterados
    // 2. Condição para encontrar o(s) utem(ns)
    
    await User.update( {idade: 18}, {
        where: {
            idade: {
                [Op.lt]: 18
            }
        }
    })


    await User.update({ nome: 'Sr Chico', idade: 56}, {
        where: {
            id: 4
        }
    })

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

    //Novo exemplo de build
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
    let users = await User.findAll()

    async function  somar() {
        let results = await User.findAll({where: {idade: 90}})
        
        if (results.length >  0) {
            let user = results[0]
            user.idade ++

            await user.save()
        }
        
    }
        
    res.render('pages/exercicioPreReq',{
        users
    })    
}


export const exercicioResponse =async (req:Request, res: Response) => {

    let nome: string = req.body.nome as string
    let idade: number = Number(req.body.idade as string)

    let user = User.build({
        nome: nome,
        idade: idade
    })
    await user.save()
    
    let users = await User.findAll()

    res.render('pages/exercicio',{
        users
    })
    
}

