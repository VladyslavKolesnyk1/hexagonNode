const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');


module.exports = (() => {
    let instance;

    function initConnection() {
        const client = new Sequelize('hex', 'root', 'root', {
            host: 'localhost',
            dialect: 'mysql'
        });

        let models = {};

        function getModels() {
            fs.readdir(path.join(process.cwd(), 'models'), (err, files) => {
                files.forEach(file => {
                    const [modelName] = file.split('.');
                    models[modelName] = client.import(path.join(process.cwd(), 'models', modelName));
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
            if(!instance) {
                instance = initConnection();
            }

            return instance;
        }
    }
})();