//Criar uma api para cadastrar um produto pra locação, separado dos demais
//Language: javascript
//Compare this snippet from produtos.js:
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
//iMPORTAR Location
const Locate = require('./models/Locate');
app.use(express.json({ limit: '50mb' }));
//Criar a rota de cadastramento de produto pra locação
app.post("/cadastro", async (request, response) => {
    const { nome, fotos, marca, modelo, ano, anoModelo, cor, combustivel, portas, lugares, cambio, motor, carroceria, km, descricao, categoria, seguro, calcao, valorDiaria, promocional, tempoPromocao, dono } = request.body;
    //Criar um vetor vazio pra armazenar as fotos
    var nomeFotos = [];
    //descriptografar a imagem base64
    //"fotos": ["base64","base64","base64","base64", "base64", "base64"]
    //Fazer um for que descriptografe os n itens do array
    for (x = 0; x < fotos.length; x++) {
        try {
            var buffer = await new Buffer.from(fotos[x].split(',')[1], 'base64');
            //gerar um número de 6 dígitos
            var number = Math.floor(Math.random() * 1000000);
            //Achar a extensão do arquivo
            var extensao = await fotos[x].split(',')[0].split('/')[1].split(';')[0];

            var fileName = `${number}${new Date().getTime()}.${extensao}`;
            var filePath = path.join(__dirname, 'locations', fileName);
            //Salvar o arquivo na pasta img
            fs.writeFileSync(filePath, buffer);
            nomeFotos[x] = fileName;

        }
        catch (error) {
            response.status(200).send({ error: true, message: "Erro descriptografando fotos: " + error });
        }
    }
    //Percorrer o nomeFotos e adicionar "" em cada item
    for (x = 0; x < 6; x++) {
        if (nomeFotos[x] == null) {
            nomeFotos[x] = "";
        }
    }
    try {
        const location = await Locate.create({
            nome,
            foto1: nomeFotos[0],
            foto2: nomeFotos[1],
            foto3: nomeFotos[2],
            foto4: nomeFotos[3],
            foto5: nomeFotos[4],
            foto6: nomeFotos[5],
            marca: marca,
            modelo: modelo,
            ano: ano,
            anoModelo: anoModelo,
            cor: cor,
            combustivel: combustivel,
            portas: portas,
            lugares: lugares,
            cambio: cambio,
            motor: motor,
            carroceria: carroceria,
            km: km,
            descricao: descricao,
            categoria: categoria,
            seguro: seguro,
            calcao: calcao,
            valorDiaria: valorDiaria,
            promocional: promocional,
            tempoPromocao: tempoPromocao,
            dono: dono
        });
        response.status(200).send({ error: false, message: "Produto cadastrado com sucesso!" });

    }
    catch (error) {
        response.status(200).send({ error: true, message: "Erro cadastrando produto: " + error });
    }
});

//Criar uma rota de edição
app.put("/editar", async (request, response) => {
    //verificar quais informações foram enviadas
    //se não foi enviada alguma informação, não alterar
    const { id, nome, fotos, marca, modelo, ano, anoModelo, cor, combustivel, portas, lugares, cambio, motor, carroceria, km, descricao, categoria, seguro, calcao, valorDiaria, promocional, tempoPromocao, dono } = request.body;
    //Criar um vetor vazio pra armazenar as fotos
    var nomeFotos = [];
    //descriptografar a imagem base64
    //"fotos": ["base64","base64","base64","base64", "base64", "base64"]
    //Fazer um for que descriptografe os n itens do array
    for (x = 0; x < fotos.length; x++) {
        var buffer = await new Buffer.from(fotos[x].split(',')[1], 'base64');
        //gerar um número de 6 dígitos
        var number = Math.floor(Math.random() * 1000000);
        //Achar a extensão do arquivo
        var extensao = await fotos[x].split(',')[0].split('/')[1].split(';')[0];
        var fileName = `${number}${new Date().getTime()}.${extensao}`;
        var filePath = path.join(__dirname, 'locations', fileName);
        //Salvar o arquivo na pasta locations
        fs.writeFileSync(filePath, buffer);
        nomeFotos[x] = fileName;
    }
    //Verificar quais das variáveis estão nulas
    //Se não estiver nula, alterar
    //Se estiver nula, não alterar
    //Criar um array pra guardar as que devem ser alteradas
    var arrayAlterar = [];
    if (nome != null) {
        arrayAlterar.push({ nome: nome });
    }
    if (foto[0] != null) {
        arrayAlterar.push({ foto1: nomeFotos[0] });
    }
    if (foto[1] != null) {
        arrayAlterar.push({ foto2: nomeFotos[1] });
    }
    if (foto[2] != null) {
        arrayAlterar.push({ foto3: nomeFotos[2] });
    }
    if (foto[3] != null) {
        arrayAlterar.push({ foto4: nomeFotos[3] });
    }
    if (foto[4] != null) {
        arrayAlterar.push({ foto5: nomeFotos[4] });
    }
    if (foto[5] != null) {
        arrayAlterar.push({ foto6: nomeFotos[5] });
    }
    if (marca != null) {
        arrayAlterar.push({ marca: marca });
    }
    if (modelo != null) {
        arrayAlterar.push({ modelo: modelo });
    }
    if (ano != null) {
        arrayAlterar.push({ ano: ano });
    }
    if (anoModelo != null) {
        arrayAlterar.push({ anoModelo: anoModelo });
    }
    if (cor != null) {
        arrayAlterar.push({ cor: cor });
    }
    if (combustivel != null) {
        arrayAlterar.push({ combustivel: combustivel });
    }
    if (portas != null) {
        arrayAlterar.push({ portas: portas });
    }
    if (lugares != null) {
        arrayAlterar.push({ lugares: lugares });
    }
    if (cambio != null) {
        arrayAlterar.push({ cambio: cambio });
    }
    if (motor != null) {
        arrayAlterar.push({ motor: motor });
    }
    if (carroceria != null) {
        arrayAlterar.push({ carroceria: carroceria });
    }
    if (km != null) {
        arrayAlterar.push({ km: km });
    }
    if (descricao != null) {
        arrayAlterar.push({ descricao: descricao });
    }
    if (categoria != null) {
        arrayAlterar.push({ categoria: categoria });
    }
    if (seguro != null) {
        arrayAlterar.push({ seguro: seguro });
    }
    if (calcao != null) {
        arrayAlterar.push({ calcao: calcao });
    }
    if (valorDiaria != null) {
        arrayAlterar.push({ valorDiaria: valorDiaria });
    }
    if (promocional != null) {
        arrayAlterar.push({ promocional: promocional });
    }
    if (tempoPromocao != null) {
        arrayAlterar.push({ tempoPromocao: tempoPromocao });
    }
    if (dono != null) {
        arrayAlterar.push({ dono: dono });
    }
    try {
        const location = await Locate.update(arrayAlterar, {
            where: {
                id: id
            }
        });
        response.status(200).send({ error: false, message: "Produto alterado com sucesso!" });
    }
    catch (error) {
        response.status(200).send({ error: true, message: "Erro alterando produto: " + error });
    }
});

//Criar uma rota de exclusão
app.delete("/excluir", async (request, response) => {
    const { id } = request.body;
    try {
        const location = await Locate.destroy({
            where: {
                id: id
            }
        });
        response.status(200).send({ error: false, message: "Produto excluído com sucesso!" });
    }
    catch (error) {
        response.status(200).send({ error: true, message: "Erro excluindo produto: " + error });
    }
});

//Rodar a api na porta 3006
app.listen(3006, () => {
    console.log("Servidor rodando na porta 3006");
});