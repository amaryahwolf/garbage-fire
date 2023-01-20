const router = require('express').Router();
const userRoutes = require('./userRoutes');
const showRoutes = require('./showRoutes');


router.use('/users', userRoutes);
router.use('/shows', showRoutes);


module.exports = router;

