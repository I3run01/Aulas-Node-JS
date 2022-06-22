import { Router } from "express";
import multer from 'multer'

import * as ApiController from '../controllers/apiController'

const router = Router()

const upload = multer({
    dest: './tmp'
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
router.post('/upload', upload.fields([
    {name: 'avatar', maxCount: 1},
    {name: 'gallary', maxCount: 3}
]),  ApiController.uploadFile)





export default router