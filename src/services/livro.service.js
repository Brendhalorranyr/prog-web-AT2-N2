import { promises as fs } from 'fs';


const FILE_PATH = './src/data/livros.json';


const recuperaTodosOsLivrosDoJson = async () => {
    const dados = await fs.readFile(FILE_PATH, 'utf-8');

    return JSON.parse(dados).livros;
};


export const recuperaTodosOsLivros = async () => {
    return await recuperaTodosOsLivrosDoJson();
}

