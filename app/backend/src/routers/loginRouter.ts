import { Router } from 'express';
import Validations from '../middlewares/validations.middleware';
import authToken from '../middlewares/auth.token';
import loginFactory from '../factories/login.factory';
import LoginController from '../controllers/login.controller';

const router = Router();

router.post('/', Validations, async (req, res) => loginFactory().userLogin(req, res));
router.get('/validate', authToken, async (req, res) => LoginController.validateUser(req, res));

export default router;
