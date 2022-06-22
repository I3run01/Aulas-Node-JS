import { Router } from "express";
import multer from 'multer'

import * as ApiController from '../controllers/apiController'

const router = Router()


const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './tmp') // local de armazenamento
        
    },

    filename: (req, file, cb) => {
        let randomName = Math.floor(Math.random()*999999999)
        cb(null, randomName + Date.now() + '.jpg')
    },


})

const upload = multer({
    storage: storageConfig,
    fileFilter: (req, file, cb) => {
        //cb(null, false) //Não aceita nenhum arquivo
        //cb(null, true) //Não aceita qualquer arquivo

        const allowed: string[] = ['image/jpg', 'image/jpeg', 'image/png']

        cb(null, allowed.includes( file.mimetype)) // se tiver no array o mimetype, vai salvar a imagem
    },
    limits: { fileSize: 2097152} //tamanho máximo do arquivo em bytes
    
})

//Deixa na memória do computador
const upload02 = multer({
    storage: multer.memoryStorage()
    //O servidor tem que ter uma memória ram grande
})

router.get('/ping', ApiController.ping)
router.get('/random', ApiController.random)
router.get('/nome/:nome', ApiController.nome)

router.post('/frases', ApiController.createPhrase)
router.get('/frases', ApiController.listPhrases)
router.get('/frase/Aleatoria', ApiController.randomPhrase)

router.get('/frase/:id', ApiController.getPhrase)
router.put('/frase/:id', ApiController.updatePhrase)
router.delete('/frase/:id', ApiController.deletePhrase)

// Manda um arquivo apenas
//router.post('/upload', upload.single('avatares'),  ApiController.uploadFile)

//Manda varios arquivos 
//upload.array(Nome da compo, número máximo de arquivos)
//router.post('/upload', upload.array('avatars', 2),  ApiController.uploadFile)

//Fields
router.post('/upload00', upload.fields([
    {name: 'avatar', maxCount: 1},
    {name: 'gallary', maxCount: 3}
]),  ApiController.uploadFile00)

router.post('/upload', upload.single('avatar'),  ApiController.uploadFile)




export default router