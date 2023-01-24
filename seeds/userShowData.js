const { UserShows } = require('../models');

const userdata = [
    {
        user_id: 1,
        show_id: 1
    },
    {
        user_id: 2,
        show_id: 2
    },
];

const seedUsersShows = () => UserShows.bulkCreate(userdata);

module.exports = seedUsersShows;