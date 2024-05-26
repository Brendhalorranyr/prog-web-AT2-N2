import { promises as fs } from 'fs';


const FILE_PATH = './src/data/livros.json';


const recuperaTodosOsLivrosDoJson = async () => {
    const dados = await fs.readFile(FILE_PATH, 'utf-8');

    return JSON.parse(dados).livros;
};

const escreverDadosNoJson = async (livros) => {
    const dados = JSON.stringify({ livros }, null, 2);
    await fs.writeFile(FILE_PATH, dados, 'utf-8');
}


export const recuperaTodosOsLivros = async () => {
    const livros = await recuperaTodosOsLivrosDoJson();

    if(livros){
        return { status: 200, msg: 'Livros recuperados com sucesso.' , livros };
    }

    return { status: 500, msg: 'Erro ao recuperar livros!' };
}

export const adicionaLivro = async (livro) => {
    const livros = await recuperaTodosOsLivrosDoJson();
    
    if(livros){
        livros.push(livro);
        await escreverDadosNoJson(livros);
        return { status: 201, msg: 'Livro adicionado com sucesso!', livroAdicionado: livro };
    }

    return { status: 500, msg: 'Erro ao adicionar livro!' };
}

export const comprarLivro = async (titulo) => {
    const livros = await recuperaTodosOsLivrosDoJson();
    const indexLivroComprado = livros.findIndex(livro => livro.titulo === titulo);

    if(indexLivroComprado === -1){
        return { status: 404, msg: 'Livro não encontrado!' };
    }

    const livroComprado = livros[indexLivroComprado];

    if(livroComprado.quantidade === 0){
        return { status: 400, msg: 'Livro fora de estoque!' };
    }

    livroComprado.quantidade--;
    await escreverDadosNoJson(livros);
    return { status: 200, msg: 'Livro comprado com sucesso!', livroComprado };
};

