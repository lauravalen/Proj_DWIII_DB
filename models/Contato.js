const Sequelize = require('sequelize');
const db = require('../db/connection');
const Contato = db.define('contato', {
	id: { type: Sequelize.INTEGER },
	nome: { type: Sequelize.STRING },
	idade: { type: Sequelize.INTEGER },
	telefone: { type: Sequelize.INTEGER },
	email: { type: Sequelize.STRING },
	empresa: { type: Sequelize.STRING },
	cargo: { type: Sequelize.STRING },
	createAt: { type: Sequelize.STRING },
	updateAt: { type: Sequelize.STRING }
});
module.exports = Contato;