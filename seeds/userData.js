const { User } = require('../models');

const userdata = [
    {
        name: "barabarawalsh",
        email: "barbara@email.com",
        password: "Password123",
    },
    {
        name: "ihearttv",
        email: "eliza@email.com",
        password: "superSecretPassword",
    },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
// 