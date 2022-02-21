const express = require('express');
const router = express.Router();
const userRouter = require('./users')

router.use('/patient', userRouter);

module.exports = router;