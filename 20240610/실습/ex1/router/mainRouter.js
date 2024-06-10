const express = require("express");
const router = express.Router();

const boardRouter = require("./boardRouter");
const userRouter = require("./userRouter");
const cartRouter = require("./cartRouter");

router.use('/board', boardRouter);
router.use('/user', userRouter);
router.use('/cart', cartRouter);

module.exports = router;