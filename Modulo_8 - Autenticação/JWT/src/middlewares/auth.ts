import { Request, Response, NextFunction } from "express"
import JWT from 'jsonwebtoken'
import doenv from 'dotenv'
import { User } from "../models/User"

export  const Auth = {
    private: async (req: Request, res: Response, next: NextFunction) => {
        let success = false

        //Fazer verificação de auth
        if(req.headers.authorization) {
           
            const [authtype, token ] = req.headers.authorization.split(' ')
            if(authtype === 'Bearer') {
                try {
                    JWT.verify(
                        token, 
                        process.env.JWT_SECRET_KEY as string
                    )
                    success = true
                } catch(err) {

                }           
            }
        }

        if (success) next()
        else {
            res.status(403) //Não auorizado
            res.json( {error: `Não autorizado`})
        }
    },
}