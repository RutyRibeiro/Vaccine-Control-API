const { Sequelize } = require("sequelize");

const database = new Sequelize(process.env.DATABASE_URL, {
    dialect:'postgres',
    protocol:'postgres',
    dialectOptions:{
        ssl: {
            require:true,
            rejectUnauthorized: false,
        }
    }
});

database.authenticate()
.then(() => console.log("Database Connected"))
.catch(()=> console.error("An error occured connecting to the server"));

module.exports = database