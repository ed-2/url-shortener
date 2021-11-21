# url-shortener

Esse repositório é uma modificação do projeto criado pela [Alexia Pereira](https://www.linkedin.com/in/alexiapereira/) de de um Encurtador de URL.



### Configuração do servidor

- Crie uma conta grátis no [MongoDB](https://account.mongodb.com/account/register);
- Faça a conexão do Cluster gratuito;
- Acesse o Database Access e crie um usuário e senha;
- Acesse o Network Access e adicione o seu endereço de IP para se conectar ao seu cluster;

- Acesse a pasta deste repositório e renomeie o arquivo `.env.example` para `.env` e preencha com os dados do servidor do MongoDB.



### Rodando o projeto

- `npm install`
- `npm run build`
- `npm run dev`



### Servidor

- [http://localhost:3000](http://localhost:3000)



### Requests através do Insomnia

- Download do [Insomnia](https://insomnia.rest/download)

- POST com JSON: http://localhost:3000/shorten
  `{"originURL": "endereço da url original"}`



### GET através do navegador de internet

- http://localhost:3000/`"hash obtido através do POST"`

