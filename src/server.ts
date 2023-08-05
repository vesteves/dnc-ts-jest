import * as express from 'express'
import * as cors from 'cors'
import produtoRoute from './module/produto/produto.route'

const app = express();
app.use(express.json());
app.use(cors())
app.options('*', cors())

app.use('/produto', produtoRoute);

app.listen(8080, () => {
  console.log('Servidor funcionando!!');
});
