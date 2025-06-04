import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API para gerenciamento de tarefas',
      version: '1.0.0',
      description: 'Api criada para teste ReisSoftware',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          description: 'Insira o token JWT no formato: Bearer <token>'
        }
      }
    },
    security: [{
      bearerAuth: []
    }]
  },
  apis: ['./src/auth/login/loginRoute.js', './src/auth/register/registerRoute.js', './src/tasks/taskRoutes.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;