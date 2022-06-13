import express, {Request, Response} from "express";  //Importa o express
import path from 'path' //caminho da pasta public
import mainRoutes from './1-routes/index' //Caminho de rotas
import painelRoutes from './1-routes/painel' //Caminho de rotas

const server = express() //Cria o servidor

server.use(express.static(path.join(__dirname, '../public')))  //Deixa acessivel a pasta public

server.use('/', mainRoutes) //Rotas

server.use('/painel', painelRoutes) //Rotas

server.use((req: Request, resp: Response) => {
    resp.status(404).send('Página não encontrada')
}) //Rota para erros

server.listen(80) //Abre a porta