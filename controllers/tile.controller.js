const {tileService} = require('../services');

module.exports = {
    getAllTiles: async(req, res) => {
        const tiles = await tileService.getAllTiles();
        res.json(tiles);
    },

    getByUserId: async(req, res) => {
        const tiles = await tileService.getByUserId(req.params.userId);
        res.json(tiles)
    }
};
