const db = require('../dataBase').getInstance();

module.exports = {
    getAllTiles: () => {
        return db.getModel('Tile').findAll({})
    },

    getByUserId: (id) => {
        const tiles = db.getModel('Tile');
        return tiles.findAll({
            where: {
                user_id: id
            }
        })
    }
};