import { Router, Request, Response } from "express"

const router = Router()

router.get('/', (req: Request, res: Response )=> {
    let age: number = 20
    let showold:boolean = false

    if(age > 25) {
        showold = true
    }

    res.render('pages/home', {
        showold,

        name: 'Bonieky',
        lastName: 'Lacerda',

        products: [
            {title: 'Produto X', price: 10},
            {title: 'Produto Y', price: 15},
            {title: 'Produto W', price: 20},
        ],

        FrasesDoDia: [
            'Estudar faz bem',
            'Vivendo e aprendendo',
            'Sempre em frente'
        ]
        
    })
})

router.get('/contato', (req: Request, res: Response )=> {
    res.render('pages/contato')
})

router.get('/sobre', (req: Request, res: Response )=> {
    res.render('pages/sobre')
})

router.get('/nome', (req: Request, res: Response)=> {
    let nome: string = req.query.nome as string
    let idade: string = req.query.idade as string

    res.render('pages/nome', {
        nome,
        idade
    })
})

router.get('/idade', (req: Request, res: Response)=> {
    res.render('pages/idade')
})

router.post('/idade-resultado', (req: Request, res: Response) => {

    let mostrarIdade: boolean = false
    let idade: number = 0

    if(req.body.ano) {
        let anoNascimento:number = Number(req.body.ano as string)
        let anoAtual:number = new Date().getFullYear()

        idade = anoAtual - anoNascimento
        mostrarIdade = true
    }

    res.render('pages/idade', {
        idade,
        mostrarIdade
    })
    
})

export default router;