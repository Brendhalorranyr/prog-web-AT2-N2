export const validaLivro = (livro) => {
    const camposObrigatorios = ['titulo', 'autor', 'genero', 'imagem', 'quantidade'];
    const camposEmFalta = camposObrigatorios.filter(input => !livro[input]);

    if (camposEmFalta.length > 0) {
        return { valido: false, status: 400, message: `Os campos [${camposEmFalta.join(', ')}] são obrigatórios` };
    
    }

    if (typeof livro.quantidade !== 'number') {
        return { valido: false ,status: 400, message: 'O campo quantidade deve ser um número' };
    }

    const livroValido = {
        titulo: livro.titulo,
        autor: livro.autor,
        genero: livro.genero,
        imagem: livro.imagem,
        quantidade: livro.quantidade
    };

    return { valido: true, livroValidado: livroValido};
}

