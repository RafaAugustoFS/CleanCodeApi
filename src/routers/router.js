const { Router } = require("express");
const userRouter = require("./userRouter");
const adminRouter = require("./adminRouter");

const router = Router();

router.use('/user', userRouter);
router.use('/admin', adminRouter);

module.exports = router;