const router = require('express').Router();

router.get('/', (req, res) => {
    res.json('auth is success!')
})



module.exports = router;
