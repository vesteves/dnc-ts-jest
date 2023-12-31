const express = require('express');
const produtoModel = require('./produto.model');

const router = express.Router();

router.get('/', async (_, res) => {
  const data = await produtoModel.getAll();
  return res.status(200).json({ data });
});

router.post('/', async (req, res) => {
  const data = await produtoModel.store(req.body);
  return res.status(200).json({ data });
});

module.exports = router;
