import { Router } from 'express';

import * as HomeController from '../controllers/homeController';
import * as InfoController from '../controllers/infoController';
import * as UserController from '../controllers/userController';

import { exercicio04 } from '../controllers/homeController';
import { exercicioM4_req } from '../controllers/homeController';

const router = Router();

router.get('/', HomeController.home);

router.get('/contato', InfoController.contato);
router.get('/sobre', InfoController.sobre);

router.get('/nome', UserController.nome);
router.get('/idade', UserController.idadeForm);
router.post('/idade-resultado', UserController.idadeAction);

router.get('/exercicio04', exercicio04)
router.post('/exercicioM4_req', exercicioM4_req)

export default router;