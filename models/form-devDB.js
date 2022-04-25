// conectar banco de dados ao node.js

const Sequelize = require("sequelize");
const sequelize = new Sequelize("formulario_devs", "root", "345166", {
  host: "localhost",
  dialect: "mysql",
});

// verifica se a conexão ao banco de dados foi bem ou não sucedida
sequelize
  .authenticate()
  .then(function () {
    console.log("Conexão bem sucedida");
  })
  .catch(function (erro) {
    console.log(`Falha na conexão${erro}`);
  });

module.exports = sequelize;
