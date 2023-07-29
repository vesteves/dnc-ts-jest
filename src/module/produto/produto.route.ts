import * as express from 'express';
import produtoFactory from './produto.factory';

const router = express.Router();

router.get('/', async (_, res) => {
  const data = await produtoFactory.getAll();
  return res.status(200).json({ data });
});

router.post('/', async (req, res) => {
  const data = await produtoFactory.store(req.body);
  return res.status(200).json({ data });
});

export default router;
