const express= require('express');
const router = express.Router();
const cors = require('cors');

router.get('/', (req, res) => {
    res.send('Server is up and running');

});

module.exports = router;