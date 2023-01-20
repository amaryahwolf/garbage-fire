const { Comments } = require('../models');

const commentdata = [
    {
        comment_text: "Best out of the whole Real Houewives franchise!",
        rating: 5,
        show_id: 1,
        user_id: 1,
    },
    {
        comment_text: "They need to bring back the 1.5 hour episodes.",
        rating: 3,
        show_id: 2,
        user_id: 1,
    },
    {
        comment_text: "I keep coming back for the twins and the drama.",
        rating: 3,
        show_id: 3,
        user_id: 1,
    },
    {
        comment_text: "The latest season was so good.",
        rating: 4,
        show_id: 4,
        user_id: 1,
    },
    {
        comment_text: "Best dating show out right now.",
        rating: 2,
        show_id: 5,
        user_id: 1,
    },
    {
        comment_text: "I would totally try out for this one!",
        rating: 5,
        show_id: 6,
        user_id: 1,
    },
    {
        comment_text: "Is it just me or has Gordon Ramsey become nicer over the years?",
        rating: 2,
        show_id: 7,
        user_id: 1,
    },
    {
        comment_text: "A classic when it comes to reality tv.",
        rating: 2,
        show_id: 8,
        user_id: 1,
    },
    {
        comment_text: "I cry every episode.",
        rating: 1,
        show_id: 9,
        user_id: 1,
    },
    {
        comment_text: "So glad this doesn't air anymore lol.",
        rating: 5,
        show_id: 10,
        user_id: 1,
    },
];

const seedComments = () => Comments.bulkCreate(commentdata);

module.exports = seedComments;