import express from 'express';
import LivrosController from './controllers/livros.controller';


const app = express();
const port = 3000;

app.use(express.json());

app.use('/livros', LivrosController);


app.listen(port, () => {
    console.log(`Api de livros rodando na porta ${port}`)
})

