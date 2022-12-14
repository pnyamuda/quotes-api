const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Quotes API',
        description: 'Powerful quotes by various authors',
    },
    // host: 'localhost:3000',
    // schemes: ['http'],
    host: 'quotes-app-7pqb.onrender.com',
    schemes: ['https'],
    definitions: {
        AddQuote: {
            $quote: "add a new quote",
            $author: "Tatenda Nyamuda"
        },
        UpdateQuote: {
            quote: "update a quote",
            author: "Tatenda Nyamuda"
        },
        registerUser: {
            name: "John Doe",
            email: "email@example.com",
            password:"helloworld"
        },
         loginUser: {
            email: "email@example.com",
            password:"helloworld"
        }
    },
    securityDefinitions: {
        oAuthGithub: {
            type: 'oauth2',
            authorizationUrl: 'https://quotes-app-7pqb.onrender.com/login/github',
            flow: 'implicit',

        }
    }
};

const outputFile = './swagger.json';
const endpointsFiles = ['./index.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);