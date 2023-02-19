const Sequelize = require('sequelize');
const db = require('../../prototipo/autenticacao/models/db.js');

const Locate = db.define('locacao', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    foto1: {
        type: Sequelize.STRING,
        allowNull: false
    },
    foto2: {
        type: Sequelize.STRING,
        allowNull: false
    },
    foto3: {
        type: Sequelize.STRING,
        allowNull: false
    },
    foto4: {
        type: Sequelize.STRING,
        allowNull: true
    },
    foto5: {
        type: Sequelize.STRING,
        allowNull: true
    },
    foto6: {
        type: Sequelize.STRING,
        allowNull: true
    },
    marca: {
        type: Sequelize.STRING,
        allowNull: false
    },
    modelo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ano: {
        type: Sequelize.STRING,
        allowNull: false
    },
    anoModelo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cor: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    combustivel: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    portas: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    lugares: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    cambio: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    motor: {
        type: Sequelize.STRING,
        allowNull: false
    },
    carroceria: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    km: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    categoria: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    seguro: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    calcao: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    cancelFree: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    datasDisponiveis: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valorDiaria: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
    },
    promocional: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
    },
    tempoPromocao: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    dono: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

Locate.sync();

//Location.sync({ alter: true })
//Caso precise alterar algo na tabela, descomentar a linha acima
//Exportar o modulo
module.exports = Locate;
