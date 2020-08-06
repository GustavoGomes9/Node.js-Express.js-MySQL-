// CONEXAO DO SERVIDOR COM BANCO MYSQL

const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'gustavo', '***********',{
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {console.log("Banco autenticado com sucesso!.")}).catch((error) => {console.log(`Erro ao autenticar ${error}`)});

const Postagens = sequelize.define('postagens',{
    titulo: {type: Sequelize.STRING},
    conteudo: {type: Sequelize.TEXT}
});

// Postagens.sync({force: true})

const Usuarios = sequelize.define('usuarios',{
    nome: {type: Sequelize.STRING},
    email: {type: Sequelize.STRING},
    idade: {type: Sequelize.INTEGER}
});

// Usuarios.sync({force: true})

/*
Usuarios.create({ // faz um INSERT INTO usuarios no banco teste tabela usuarios
    nome: "Joyce",
    email: "Joycegsm12@gmail.com",
    idade: 18
}) 
*/