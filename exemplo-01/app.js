const moduleMultiplicate = require('./functions/multiplicar.js');
console.log(moduleMultiplicate.multiplicar(10,2));

const moduleSum = require('./functions/somar.js');
console.log(moduleSum(735,5));




const express = require('express');
const app = express();

app.listen (3000,"127.0.0.1", () => {
    console.log("Servidor rodando")
})
