const userService = require('../service/user.service');

module.exports = {

    getAllUsers: async (req, res) => {
        try {
            const users = await userService.findUsers();
            res.json(users);
        } catch (e) {
            res.status(400).json(e.message);
        }

    },

    getSingleUser: (req, res) => {
        const {userId} = req.params;
        const user = userService.findUserById(userId);
        res.json(user);
    },

    createUser: async (req, res) => {
        await userService.createUser(req.body);
        // res.status(201).json('User is created!');
        res.end()
    }
}
