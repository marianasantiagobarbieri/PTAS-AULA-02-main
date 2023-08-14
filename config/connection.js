const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  "postgres://ezmbgbcz:WSM5IhcF0uNg2RaHwScDqLMig0LTzV7I@silly.db.elephantsql.com/ezmbgbcz", { 
  define: {
    timetamps: true,
    underscored: true,
  },
});

try {
  sequelize.authenticate();
  console.log('Conectado com o ElephantSQL!');
} catch (error) {
  console.error('Atenção, a conexão falhou!:', error);
}

module.exports = { Sequelize, sequelize };