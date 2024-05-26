import express from 'express';
import { adicionaLivro, recuperaTodosOsLivros } from '../services/livro.service.js';

const LivrosController = express.Router();

LivrosController.get('/', async (req, res) => {
    const livros = await recuperaTodosOsLivros();
    res.json(livros);
})

LivrosController.post('/', async (req, res) => {
    const livro = req.body;
    const resultadoAdicionaLivro = await adicionaLivro(livro);
    res.status(resultadoAdicionaLivro.status).json(resultadoAdicionaLivro);
})


export default LivrosController;
