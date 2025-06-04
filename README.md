# Teste Técnico - Backend Reis Softwares
### 1. Tecnologia escolhida
Este projeto foi desenvolvido utilizando Node.js (JavaScript puro) com o framework Express.

A escolha pelo Express se deu pelo meu conhecimento prévio com a biblioteca, o que permitiu maior agilidade no desenvolvimento, especialmente considerando o curto prazo para a entrega do projeto. Além disso, o Express é uma solução leve, direta e de fácil configuração, sendo ideal para projetos técnicos de curta duração. A utilização de JavaScript puro também contribuiu para uma maior acessibilidade e velocidade no desenvolvimento.

### 2. Setup do projeto
#### 1º Clone este repositório:

git clone https://github.com/JoseBruno2005/teste-backend-ReisSoftwares.git

#### 2º Acesse o diretório do projeto:

A pasta raiz do projeto é: teste-backend-ReisSoftwares

Caso por algum motivo, ao abrir o projeto você se localize em uma outra pasta execute o seguinte comando: 

cd .\teste-backend-ReisSoftwares\

#### 3º Instale as dependências:

npm install

#### 4º Configuração do .env

O arquivo .env já está presente no repositório.

⚠️ O arquivo .env já está configurado com exemplos de variáveis de ambiente como DATABASE_URL e JWT_SECRET. No entanto, você pode (e deve) alterar os valores para se adequar à sua configuração local, como dados de conexão com o banco de dados.

#### 5º Criação e Configuração do Banco
Antes de rodar as migrations, é necessário criar um banco de dados PostgreSQL com o mesmo nome definido na variável DATABASE_URL no arquivo .env.

A estrutura do banco foi definida utilizando o Prisma ORM, que também é responsável pela criação e gerenciamento dos models presentes no projeto. Após criar o banco, utilize os comandos abaixo para aplicar as migrations e gerar o Prisma Client:

Após a criação do banco, entre na pasta src com o seguinte comando:

cd .\src\

Então, execute as migrations e gere o Prisma Client:

npx prisma migrate dev

npx prisma generate

### 3. Como executar

Para inicial o servidor saia da pasta src com seguinte comando:

cd ..

agora na pasta raiz do projeto rode:

node src/server.js

A API ficará disponível em:

http://localhost:3000

### 4. Como testar a API
### Postman
Uma collection Postman já está incluída no repositório.

Basta importá-la no Postman e testar normalmente.

#### Rotas públicas
As rotas de registro (/auth/register) e login (/auth/login) não exigem autenticação.

#### Rotas protegidas
As rotas relacionadas à Task são protegidas com JWT.

Para acessá-las:

Realize o login enviando um email e senha já cadastrados para a rota:

POST /auth/login

Copie o token retornado no campo token.

No Postman, adicione o token no cabeçalho (Header) de qualquer requisição relacionada às rotas de tarefas (tasks) para ter acesso completo às funcionalidades protegidas pela autenticação JWT:

Authorization: Bearer seu_token_aqui

### Swagger
Com servidor rodando acesse a documentação interativa em:

http://localhost:3000/api-docs

O Swagger mostra todas as rotas da API e permite testá-las diretamente no navegador.

#### Rotas públicas
POST /auth/register

POST /auth/login

#### Rotas protegidas
Todas as rotas de Task (CRUD) exigem autenticação.

Para testar:

Faça login em POST /auth/login.

Copie o token retornado.

Clique em "Authorize" no canto superior direito da interface do Swagger.

No campo que aparecer (Authentication), cole:

seu_token

Clique em "Authorize" novamente e feche o modal.

Agora você pode testar todas as rotas autenticadas diretamente pelo Swagger.

### 5. Bibliotecas utilizadas
{
  "dependencies": {

    "@prisma/client": "^6.8.2",
    "bcryptjs": "^3.0.2",
    "dotenv": "^16.5.0",
    "express": "^5.1.0",
    "jsonwebtoken": "^9.0.2",
    "swagger-jsdoc": "^6.2.8",
    "swagger-ui-express": "^5.0.1"
},
  "devDependencies":  {

    "prisma": "^6.8.2"
}

}

### 6. Decisões técnicas
Express: leve e direto ao ponto.

Prisma: ORM moderno com suporte ao PostgreSQL.

JWT: autenticação segura e escalável.

bcryptjs: hash seguro de senhas.

dotenv: gerenciamento de variáveis de ambiente.

Swagger: documentação automática e interativa.

### 7. Melhorias futuras
    Testes com Jest.

    Refatoração para NestJS.

    Revisão dos códigos de status HTTP nas respostas para garantir que representem corretamente o resultado das requisições.