import { Router } from 'express';
import teamsFactory from '../factories/teams.factory';

const router = Router();

router.get('/', async (req, res) => teamsFactory().getAll(req, res));
router.get('/:id', async (req, res) => teamsFactory().getById(req, res));

export default router;
