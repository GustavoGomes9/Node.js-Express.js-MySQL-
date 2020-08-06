/* CRIANDO SERVIDOR WEB COM NODE.JS SEM FRAMEWORK */

const http = require('http') // Criando variavel e atribuindo o modulo http do node.js a ela  
const port = 8081
http.createServer(function(req, res){ // metodo create server cria um servidor e tem uma função dentro chamada callback, que são parametros que eu tenho que estudar 
    res.end("Funcionando servidor") // .end é um metdodo de saida do servidor  para comunicação com o cliente 
}).listen(port) // metodo listen define qual porta estará sendo criado o servidor 

