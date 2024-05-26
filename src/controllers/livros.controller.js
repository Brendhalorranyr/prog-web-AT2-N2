import express from 'express';
import { adicionaLivro, comprarLivro, recuperaTodosOsLivros } from '../services/livro.service.js';

const LivrosController = express.Router();

LivrosController.get('/', async (req, res) => {
    const livros = await recuperaTodosOsLivros();
    res.json(livros);
})

LivrosController.post('/', async (req, res) => {
    const livro = req.body;
    const resultadoAdicionaLivro = await adicionaLivro(livro);
    res.status(resultadoAdicionaLivro.status).json(resultadoAdicionaLivro);
});

LivrosController.post('/comprar', async (req, res) => {
    const { titulo } = req.body;
    const resultadoComprarLivro = await comprarLivro(titulo);
    res.status(resultadoComprarLivro.status).json(resultadoComprarLivro);
});


export default LivrosController;
