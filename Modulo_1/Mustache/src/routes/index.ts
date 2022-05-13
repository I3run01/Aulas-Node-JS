import { Router, Request, Response } from "express"

const router = Router()

router.get('/', (req: Request, res: Response )=> {
    let age: number = 15
    let showold:boolean = false

    if(age > 50) {
        showold = true
    }

    res.render('home', {
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

router.get('/sobre', (req: Request, res: Response )=> {
    res.send('Página institucional sobre a empresa')
})

export default router;