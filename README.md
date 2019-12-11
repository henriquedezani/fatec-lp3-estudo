# 1. Criando e executando o projeto

# 1.1. Criar o projeto

Para iniciarmos um novo projeto Node.JS, precisamos executar o comando abaixo. Este comando criará o arquivo package.json, o qual consiste no arquivo de configuração de nossa aplicação. o NPM (Node Package Manager) é instalado junto com o [NodeJS](https://nodejs.org/en/).

`npm init -y`

# 1.2. Instalar as dependências de produção

Para o projeto, utilizaremos três bibliotecas, quais sejam: `express`, responsável por controlar as requisições e respostas HTTP, `mongoose`, responsável por conectar e manipular o banco de dados MongoDB; e `cors` (Cross-Origin ...), responsável por dar acesso à API mesmo em chamadas externas.

`npm install --save express mongoose cors`

# 1.3. Instalar a dependência de desenvolvimento

O Nodemon permite fazermos alterações no código e usá-las sem que haja a necessidade de reiniciar o servidor.

`npm install -D nodemon`

# 1.4. Criando o arquivo server.js

Dentro da pasta do projeto, crie um arquivo chamado `server.js`, o qual conterá o código:

```javascript
var express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(process.env.PORT || 3000);
```

# 1.5. Executando o projeto

Para executar o projeto, basta adicionar no objeto `scripts` do arquivo `package.json` a linha de código:

`"start": "nodemon server.js",`

```json
"scripts": {
    "start": "nodemon server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

Em seguida, no Terminal (Console), execute o comando:

`npm start`

Agora basta abrir o navegador no endereço abaixo para visualizar a execução da API ("Hello World!")

`http://localhost:3000`

# 2. Criando uma base de dados usando NoSQL MongoDB (Cloud)

Primeiramente, é necessário criar uma conta e efetuar o login na Cloud do MongoDB, chamada [Atlas](https://cloud.mongodb.com/user).


