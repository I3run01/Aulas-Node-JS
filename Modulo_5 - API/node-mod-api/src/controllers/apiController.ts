import {Request, Response} from 'express'
import { Op, where } from "sequelize";

import { Phrase } from '../models/phrase'

export const ping = (req: Request, res: Response) => {
    res.json({pong: true})
}

export const random = (req: Request, res: Response) => {
    let nRand: number = Math.floor( Math.random()*10)
    res.json({number: nRand})
}

export const nome = (req: Request, res: Response) => {
    let nome: string = req.params.nome
    res.json({nome: 'Você enviou o nome ' + nome})
}

export const createPhrase = async (req: Request, res: Response) => {
    //let {author, txt} = req.body
    let author = 'Author teste'
    let txt = 'Frase qualquer'

    let newPhrase = await Phrase.create({ author, txt})
    res.json({id: newPhrase.id, author, txt})

}