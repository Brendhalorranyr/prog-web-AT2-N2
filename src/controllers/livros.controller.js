import express from 'express';
import { recuperaTodosOsLivros } from '../services/livro.service.js';

const LivrosController = express.Router();

LivrosController.get('/', async (req, res) => {
    const livros = await recuperaTodosOsLivros();
    res.json(livros);
})


export default LivrosController;
