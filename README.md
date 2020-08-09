# REST Api

Esta aplicação foi desenvolvida pra testar o ORM Sequelize.

Na API, é possível criar usuários e estudantes. Um usuário pode então realizar login, via JsonWebToken, para ganhar então permissão para editar e excluir suas próprias informações; criar, listar, editar e excluir estudantes; e fazer upload de imagens associando a elas um determinado estudante.

## Bibliotecas e Ferramentas

- **ESLint e Prettier:** O linter utilizado para padronizar o código e realizar o autofix.
- **Sucrase:** Módulo que permite usar a sintaxe _import/export_ no Node.
- **Nodemon:** Neste caso, além de somente habilitar o _hot reload_ da aplicação, o Nodemon está habilitando o Sucrase em tempo de execução.
- **Sequelize:** O ORM utilizado para gerenciar o banco de dados relacional.
- **SQLite 3:** O banco de dados que sempre utilizo para testar uma aplicação.
- **Exoress:** O framework com o qual crio e configuro o servidor.
- **BCryptJS:** Biblioteca de criptografia, usado para gerar hashes.
- **JsonWebToken:** A biblioteca que gerencia nossos tokens JWT.
- **Dotenv:** Biblioteca que configura variáveis de ambiente na aplicação.
- **Multer:** Biblioteca que possibilita o upload de arquivos pela nossa API.
