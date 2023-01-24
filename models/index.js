const Comments = require('./Comments');
const Show = require('./Show');
const User = require('./User');
const UserShows = require('./UserShows');

Comments.belongsTo(Show, {
    foreignKey: 'show_id',
});

Show.hasMany(Comments, {
    foreignKey: 'show_id',
});

Comments.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Comments, {
    foreignKey: 'user_id',
});

User.belongsToMany(Show, {
    through: {
        model: UserShows,
        unique: false
    },
    // as: 'user-shows'
});

Show.belongsToMany(User, {
    through: {
        model: UserShows,
        unique: false
    },
    // as: 'show-users'
});

module.exports = { Comments, Show, User, UserShows };