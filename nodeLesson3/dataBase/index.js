// Це напряму через базу даних

// const mysql2 = require('mysql2');
//
// let connection = mysql2.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'smq80986357720',
//     database: 'users'
// });
//
// module.exports = connection;

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

module.exports = (() => {
        let instance;
        
        function initConnection() {
            const client = new Sequelize('users', 'root', 'smq80986357720', {
                host: 'localhost',
                dialect: 'mysql'
            });

            let models = {};
            
            function getModels() {
                fs.readdir(path.join(process.cwd(), 'dataBase', 'models'), (err, files) => {
                    files.forEach(file => {
                        const [modelName] = file.split('.');     // [0]
                        models[modelName] = client.import(path.join(process.cwd(), 'dataBase', 'models', modelName));
                    })
                })
            }

            return {
                setModels: () => getModels(),
                getModel: (modelName) => models[modelName]
            }
        }

        return {
            getInstance: () => {
                if (!instance){
                    instance = initConnection();
                }
                return instance;
            }
        }
})();
