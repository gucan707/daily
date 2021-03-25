const Router = require("koa-router");
const router = new Router();

const createHabit = require("./createHabit");
const delHabit = require("./delHabit");
const modifyHabit = require("./modifyHabit");
const searchHabit = require("./searchHabit");

router.use("/createHabit", createHabit.routes(), createHabit.allowedMethods());
router.use("/delHabit", delHabit.routes(), delHabit.allowedMethods());
router.use("/modifyHabit", modifyHabit.routes(), modifyHabit.allowedMethods());
router.use("/searchHabit", searchHabit.routes(), searchHabit.allowedMethods());

module.exports = router;
