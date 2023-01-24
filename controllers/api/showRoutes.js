const router = require("express").Router();
const { User, Comments, Show, UserShow } = require("../../models");
const withAuth = require('../../utils/auth');

// CREATE new show association for the user
router.post('/', (req, res) => {
  
});

// DELETE show association for the user
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const usershowData = await UserShow.destroy({
          where: {
            id: req.params.id,
            user_id: req.session.user_id,
          },
        });
        console.log(usershowData);
        if (!usershowData) {
          res.status(404).json({ message: 'No show found with this id!' });
          return;
        }
    
        res.status(200).json(usershowData);
      } catch (err) {
        res.status(500).json(err);
      }
});


module.exports = router;