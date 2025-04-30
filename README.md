<h1 align="center" style="font-weight: bold">DESAFIO CEAP</h1>

## Tecnologias 🖥️

Este projeto está utilizando as seguintes tecnologias:

- [NestJS](https://nestjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [MySQL](https://www.mysql.com/)
- [TypeORM](https://typeorm.io/)
- [Angular](https://angular.dev/)

## Endpoints back-end 📌

A seguir estão as rotas da aplicação:

### Alunos

- **GET** `/alunos`: lista todos os alunos registrados.
- **GET** `/alunos/:id`: lista um aluno buscando pelo id.
- **POST** `/alunos`: cria um novo aluno.
- **PATCH** `/alunos/:id`: atualiza propriedades de um aluno.
- **DELETE** `/alunos/:id`: deleta um aluno.

### Cursos

- **GET** `/cursos`: lista todos os cursos registrados.
- **GET** `/cursos/:id`: lista um curso buscando pelo id.
- **POST** `/cursos`: cria um novo curso.
- **PATCH** `/cursos/:id`: atualiza propriedade tipo de um curso.
- **DELETE** `/cursos/:id`: deleta um curso.

### Matriculas

- **GET** `/matriculas`: lista todas os matriculas registradas.
- **GET** `/matriculas/:id`: lista uma matricula buscando pelo id.
- **POST** `/matriculas`: cria uma nova matricula.
- **PATCH** `/matriculas/:id`: atualiza propriedade status de uma matricula.
- **DELETE** `/matriculas/:id`: deleta uma matricula.

## Como rodar o back-end do projeto? 💿

<h3>Pre-requisitos</h3>

- [Node.js](https://nodejs.org/en)
- [Git](https://git-scm.com/)
- [Github](https://github.com/)

<h3>Clonagem</h3>

```bash
# clone o repositório
$ git clone https://github.com/bastosmatheus/desafio_ceap.git
```

<h3>Back-end</h3>

<h3>Configuração do arquivo .env</h3>

```bash
# arquivo .env
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_DATABASE=
```

```bash
# depois de clonado, procure a pasta do projeto
$ cd back

# instale as dependências
$ npm install

# rode as migrations no banco de dados
$ npm run migration:run

# rode o projeto
$ npm run start
```

## Como rodar o front-end do projeto? 💿

<h3>Pre-requisitos</h3>

- [Node.js](https://nodejs.org/en)
- [Git](https://git-scm.com/)
- [Github](https://github.com/)

<h3>Clonagem</h3>

```bash
# clone o repositório
$ git clone https://github.com/bastosmatheus/desafio_ceap.git
```

<h3>Front-end</h3>

```bash
# depois de clonado, procure a pasta do projeto
$ cd front

# instale as dependências
$ npm install

# rode o projeto
$ npm run start
```
