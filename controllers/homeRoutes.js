const router = require('express').Router();
const { Comments, Show, User, UserShows } = require('../models');
const withAuth = require('../utils/auth');

// GET all shows for homepage view
router.get('/', async (req, res) => {
    try {
        const showData = await Show.findAll()

const shows = showData.map((show) => show.get({ plain: true }));

res.render('homepage', {
    shows,
    logged_in: req.session.logged_in
});
} catch (err) {
    console.log(err)
    res.status(500).json(err);
}
});

// GET shows by id with comments & ratings for show view (ADD withAuth)
router.get('/show/:id', async (req, res) => {
    try {
      const showData = await Show.findByPk(req.params.id, {
        include: [{ model: Comments }]
      });
  
      const show = showData.get({ plain: true });
    //   console.log(show)
      res.render('show', {
        ...show,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

// GET all shows, comments, ratings for feed view (ADD withAuth)
router.get('/feed', async (req, res) => {
    try {
        const showData = await Show.findAll({
            include: [{ model: Comments }]
          })

const shows = showData.map((show) => show.get({ plain: true }));

res.render('feed', {
    shows,
    logged_in: req.session.logged_in
});
} catch (err) {
    console.log(err)
    res.status(500).json(err);
}
});  

// GET shows by rating for rating view (ICEBOX: NOT WORKING)
router.get('/rating', async (req, res) => {
    try {
        const showData = await Show.findAll()

const shows = showData.map((show) => show.get({ plain: true }));

res.render('rating', {
    shows,
    logged_in: req.session.logged_in
});
} catch (err) {
    console.log(err)
    res.status(500).json(err);
}
});

// GET profile (2nd priority)
router.get('/profile', withAuth, async (req, res) => {
    try {
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] },
        include: [{ model: Show, through: UserShows, as: 'show-users' }],
      });
  
      const user = userData.get({ plain: true });
  
      res.render('profile', {
        ...user,
        logged_in: true
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

// GET login
  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });

  module.exports = router;