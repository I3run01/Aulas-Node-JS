import express, { Request, Response, ErrorRequestHandler } from 'express';
import path from 'path';
import dotenv from 'dotenv'
import apiRoutes from './routes/api'
import cors from 'cors'
import { MulterError } from 'multer'
import { rmSync } from 'fs';

dotenv.config();

const server = express();

server.use(cors({
    origin: '*', //libera tudo
    //posso colocar a url que pode usar
   // methods: ['GET', 'POST'] -> //libera o método GET e Post
}))

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({extended: true}));

server.use(apiRoutes)

server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({error: 'Endpoint não encontrado.'});
});

const erroHandler: ErrorRequestHandler = (err, req, res, next) => {
    res.status(400)  // Bad Request
    
    if(err instanceof MulterError) {
        res.json( {error: err.code})
    } else {
        console.log( err )
        res.json( {error: 'Ocorreu algum erro'} )
    }
}

server.use(erroHandler)

server.listen(process.env.PORT);