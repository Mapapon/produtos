const Sequelize = require('sequelize');
const db = require('./db.js');

const Gtin = db.define('gtin', {
  gtin: {
    type: Sequelize.STRING,
    primaryKey: true
  },
  nome_produto: {
    type: Sequelize.STRING,
    allowNull: false
  },
  descricao_produto: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  empresa_produtora: {
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
    allowNull: false
  },
  foto5: {
    type: Sequelize.STRING,
    allowNull: false
  },
  foto6: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Gtin.sync();

//Gtin.sync({ alter: true })
//Caso precise alterar algo na tabela, descomentar a linha acima

module.exports = Gtin;
