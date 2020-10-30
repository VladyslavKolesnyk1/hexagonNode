const {userService} = require('../services/index');

module.exports = {
    getAllUsers: async (req,res) => {
        const users = await userService.getAllUsers();
        res.json(users)
    }
};