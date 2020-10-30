const db = require('../dataBase').getInstance();

module.exports = {
    getAllUsers:  () => {
        return db.getModel('User').findAll({})
    }
};