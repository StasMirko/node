const DB = require('../dataBase/users');

module.exports = {
    findUsers: () => {
        return DB;
    },

    findUserById: (userId) => {
        return DB[userId];
    },

    createUser: (userOdject) => {
        DB.push(userOdject);
    }

}
