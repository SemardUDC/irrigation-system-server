const express = require('express');
const waterFlowRoutes = require('./water-flow.route');

const router = express.Router();

router.use('/water-flow', waterFlowRoutes);

module.exports = router;