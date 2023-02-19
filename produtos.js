//Criar uma api para cadastrar GTIN no banco de acordo com o models/Gtin.js
//Ela deve receber o GTIN, nome do produto, descrição do produto, empresa produtora, foto1, foto2, foto3, foto4, foto5 e foto6
//Ela deve retornar o GTIN cadastrado
//Iniciar o express e criar uma rota para cadastrar o GTIN no banco de dados
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const Gtin = require('./models/Gtin');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

//Criar api com grande limite de upload
app.use(express.json({ limit: '50mb' }));



//app.use(express.json());

// async function isAuthorized(req, res, next) {
//     try {
//         const token = req.headers.authorization;
//         if (!token) {
//             return res.status(200).json({ error: true, message: 'Token não fornecido' });
//         }
//         // Verificando o token
//         const decoded = await jwt.verify(token, 'mapapon_versao_1.0.0_key_dev');
//         req.user = decoded;
//         next();
//     } catch (error) {
//         return res.status(200).json({ error: true, message: 'Token inválido' });
//     }
// }

//Criar a rota de cadastramento de GTIN
app.post("/cadastro", async (request, response) => {
    try{
    const { codigo, nome, descricao, empresa, fotos } = request.body;


    //Criar um vetor vazio pra armazenar as fotos
        var nomeFotos = [];
        //descriptografar a imagem base64
        //"fotos": ["base64","base64","base64","base64", "base64", "base64"]
        //Fazer um for que descriptografe os 6 itens do array
        for ($x = 0; $x < 6; $x++) {
            try {
                var buffer = await new Buffer.from(fotos[$x].split(',')[1], 'base64');
                //gerar um número de 6 dígitos
                var number = Math.floor(Math.random() * 1000000);
                //Achar a extensão do arquivo
                var extensao = await fotos[$x].split(',')[0].split('/')[1].split(';')[0];

                var fileName = `${number}${new Date().getTime()}.${extensao}`;
                var filePath = path.join(__dirname, 'img', fileName);
                //Salvar o arquivo na pasta img
                fs.writeFileSync(filePath, buffer);
                nomeFotos[$x] = fileName;

            }
            catch (error) {
                response.status(200).send({ error: true, message: "Erro descriptografando fotos: " + error });
            }
        }
        try {
            //Cadastrar o GTIN no banco de dados sem tratamento nenhum
            console.log({
                gtin: codigo,
                nome_produto: nome,
                descricao_produto: descricao,
                empresa_produtora: empresa,
                foto1: nomeFotos[0],
                foto2: nomeFotos[1],
                foto3: nomeFotos[2],
                foto4: nomeFotos[3],
                foto5: nomeFotos[4],
                foto6: nomeFotos[5]
            });
            const gtin = await Gtin.create({
                gtin: codigo,
                nome_produto: nome,
                descricao_produto: descricao,
                empresa_produtora: empresa,
                foto1: nomeFotos[0],
                foto2: nomeFotos[1],
                foto3: nomeFotos[2],
                foto4: nomeFotos[3],
                foto5: nomeFotos[4],
                foto6: nomeFotos[5]
            });
            //Retornar o GTIN cadastrado
            response.status(201).json({
                gtin: gtin.gtin
            });
        } catch (error) {
            response.status(200).send({ error: true, message: "Erro cadastrando gtin: " + error });
        }
    }
    catch (error) {
        response.status(200).send({ error: true, message: "Erro: " + error });
    }
});

//Criar a rota de busca de GTIN

app.get("/busca/:codigo", async (request, response) => {
    const { codigo } = request.params;
    try {
        //Buscar o GTIN no banco de dados
        const gtin = await Gtin.findOne({
            where: {
                gtin: codigo
            }
        });
        //Retornar o GTIN cadastrado
        response.status(201).json({
            gtin: gtin
        });
    }
    catch (error) {
        response.status(200).send({ error: true, message: "Erro: " + error });
    }
});

//Criar a rota de busca de GTIN

app.get("/busca", async (request, response) => {
    try {
        //Buscar o GTIN no banco de dados
        const gtin = await Gtin.findAll();
        //Retornar o GTIN cadastrado
        response.status(201).json({
            gtin: gtin
        });
    }
    catch (error) {
        response.status(200).send({ error: true, message: "Erro: " + error });
    }
});

//Finalizar a api rodando na porta 3006

app.listen(3006, () => {
    console.log("Servidor rodando na porta 3006");
});











