import { Router } from 'express';
import matchesFactory from '../factories/matches.factory';
import authToken from '../middlewares/auth.token';

const router = Router();

router.get('/', async (req, res) => matchesFactory().getAll(req, res));
router.post('/', authToken, async (req, res) => matchesFactory().create(req, res));
router.patch('/:id/finish', async (req, res) => matchesFactory().updated(req, res));
router.patch('/:id', async (req, res) => matchesFactory().updateGoals(req, res));

export default router;
