const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  "postgres://yxwstqqn:SJNvNiw1xTR-UY2P2VQbszSa7NN0geiu@silly.db.elephantsql.com/yxwstqqn", { 
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