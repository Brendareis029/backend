import moduleMultiplicate from'./functions/multiplicar.js';
console.log(moduleMultiplicate.multiplicar(10,2));

import moduleSum from'./functions/somar.js';
console.log(moduleSum(735,5));

import express, { response } from 'express';
const app = express();

app.get('/', (request, response) => {
    response.status(200).send("Hello World");
})

app.get ("/data", (request, response) => {
    const result = {
        name: "Bruno",
        age: 22,
    
};

response.status (200).json(result);

});

app.listen (3000,"127.0.0.1", () => {
    console.log("Servidor rodando")
});
