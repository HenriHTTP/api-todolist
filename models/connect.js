const Sequelize = require ('sequelize'); 


const sequelize = new Sequelize ('To-do-db','root','123', { //connect  to db 
    host: '127.0.1', 
    dialect: 'mysql'
}); 

sequelize.authenticate().then(() => {
    console.log('Conexão estabelecida com sucesso.');
  })
  .catch((err) => {
    console.error('Erro ao conectar com o banco de dados:', err);
  });

module.exports = { 
    sequelize : sequelize,  // lib 
    Sequelize : Sequelize  // local  data base 
};  