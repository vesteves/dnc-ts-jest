import * as express from 'express'
import produtoRoute from './module/produto/produto.route'

const app = express();
app.use(express.json());

app.use('/produto', produtoRoute);

app.listen(8080, () => {
  console.log('Servidor funcionando!!');
});
