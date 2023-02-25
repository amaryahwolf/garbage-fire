const sequelize = require('../config/connection');

const seedUsers = require('./userData')
const seedShows = require('./showData');
const seedComments = require('./commentsData');
const seedUsersShows = require('./userShowData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUsers();

    await seedShows();

    await seedUsersShows();

    await seedComments();

    process.exit(0);
};

seedAll();