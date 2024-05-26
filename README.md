# API de Livros

Bem-vindo à API de Livros! Esta API permite que você gerencie uma coleção de livros e realize operações como listar todos os livros, adicionar novos livros e comprar livros (atualizando a quantidade de exemplares disponíveis).


## Tecnologias

**Node.js**

**Express**

# Instalação

Para testar o projeto você deve seguir os seguintes passos:


### 1 - Clonar o projeto
```bash
  git clone https://github.com/Brendhalorranyr/prog-web-AT2-N2.git
```

### 2 - Entrar na pasta do projeto e baixar as dependencias
```bash
  cd prog-web-AT2-N2

  npm install
```

### 3 - Iniciar o projeto pelo script start
```bash
  npm run start
```



    
# Documentação da API

### Retorna todos os livros
```http
  GET /livros
```
Este endpoint vai retornar todos os livros disponiveis na base de dados.

Exemplo de payload de resposta:
```json
{
    "status": 200,
    "msg": "Livros recuperados com sucesso.",
    "livros": [
        {
            "titulo": "Meditações",
            "autor": "Marco Aurélio",
            "genero": "Filosofia",
            "imagem": "https://m.media-amazon.com/images/I/41bQU67zLnL._SY445_SX342_.jpg",
            "quantidade": 8
        },
        {
            "titulo": "Orgulho e Preconceito",
            "autor": "Jane Austen",
            "genero": "Romance",
            "imagem": "https://m.media-amazon.com/images/I/51adYP1B4xL._SY445_SX342_.jpg",
            "quantidade": 7
        }
{
```
### Adicionar um novo livro
```http
  POST /livros
```
Este endpoint vai adicionar um livro a base de dados.

Exemplo de payload a ser enviado pelo body da requisição:
```json
    {
    "titulo": "titulo",
    "autor": "autor",
    "genero": "genero",
    "imagem": "imagem",
    "quantidade": 10
    }
```

Exemplo de payload de resposta:
```json
{
    "status": 201,
    "msg": "Livro adicionado com sucesso!",
    "livroAdicionado": {
        "titulo": "titulo",
        "autor": "autor",
        "genero": "genero",
        "imagem": "imagem",
        "quantidade": 10
    }
}
```

### Comprar um livro
```http
  POST /livros/comprar
```
Este endpoint vai comprar um livro disponivel na base de dados se a quantidade for maior que 0.

Exemplo de payload a ser enviado pelo body da requisição:
```json
    {
    "titulo": "titulo"
    }
```

Exemplo de payload de resposta:
```json
{
    "status": 200,
    "msg": "Livro comprado com sucesso!",
    "livroComprado": {
        "titulo": "titulo",
        "autor": "autor",
        "genero": "genero",
        "imagem": "imagem",
        "quantidade": 9
    }
}
```


