// findUsers
// createUser

const  db = require('../dataBase').getInstance();


module.exports = {

    findUsers: async () => {

        const  UserModel = db.getModel('User');

        const users = await UserModel.findAll({});

        return users;
    },

    createUser: async (user) => {

        const  UserModel = db.getModel('User');

        await UserModel.create(user);
    }

}
