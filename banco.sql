CREATE DATABASE IF NOT EXISTS sistemanode;

USE sistemanode;

CREATE TABLE IF NOT EXISTS usuarios(
    id int NOT NULL AUTO_INCREMENT,
    nome VARCHAR(50),
    email VARCHAR(200),
    idade INT,
    PRIMARY KEY (id)
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Joyce",
    "Joyce@gmail.com",
    18
),
(
    "Gustavo",
    "Gustavo@gmail.com",
    20
);

UPDATE usuarios SET nome = "Guto" WHERE nome = "Gustavo";

DELETE FROM usuarios WHERE nome = "Guto";