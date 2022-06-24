import { Request, Response, NextFunction } from "express"
import { User } from "../models/User"

export  const Auth = {
    private: async (req: Request, res: Response, next: NextFunction) => {
        let success = false

        //Fazer verificação de auth
        if(req.headers.authorization) {
            let hash: string = req.headers.authorization.substring(6)
            let decoded:string = Buffer.from(hash, 'base64').toString()
            //Decodifica a senha e login no código base64
            let data: string[] = decoded.split(':')

            if (data.length === 2) {
                let hasUser = await User.findOne({
                    where: {
                        email: data[0],
                        password: data[1]
                    }
                })
                if (hasUser) {
                    success = true
                }
            }

            console.log('DECODED', decoded)
        }

        if (success) next()
        else {
            res.status(403) //Não auorizado
            res.json( {error: `Não autorizado`})
        }
    },
}