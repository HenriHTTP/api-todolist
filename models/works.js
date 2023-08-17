const  db =  require ("../databases/conn"); 

const  works = db.sequelize.define('works',{
    title:{ 
        type:db.Sequelize.STRING
    }, 
    description: { 
        type:db.Sequelize.TEXT
    }, 
    status:{ 
        type:db.Sequelize.STRING
    }
},{
        tableName: 'works', // Nome real da tabela no banco de dados
        timestamps: false,  // Remover as colunas createdAt e updatedAt)
});
    

module.exports=works