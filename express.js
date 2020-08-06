/* CRIANDO SERVIDOR COM EXPRESS */

const express = require('express') // Criando variavel e atribuindo o modulo express do express.js a ela  
const app = express() // atribuindo o metodo para variavel app
const port = 8081 // definindo a porta 

app.get('/', (req, res) => { // definindo uma rota e criando uma arrow-function callback
    res.sendFile(`${__dirname}/html/index.html`)
app.get('/model', (req, res) => {
    res.send("Aplication model") // .send envia mensagem para index
})
})

app.get('/home', (req, res) => {
    res.send("Aplication home")
})

app.get('/ola/:nome/:cargo', (req, res) => { // cria parametros na rota
    res.send(req.params) //usando o parametro req para receber os valores
})

app.listen(port, () => { // criando servidor e definindo porta e arrow-function para rodar log no terminal 
    console.log(`Servidor rodando em http://localhost:${port}`)
    console.log(`Porta: ${port}`)
    console.log('Digite ctrl-C para sair..')
})

