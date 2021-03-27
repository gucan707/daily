const Router = require("koa-router");
const createHabit = require("./createHabit");
const delHabit = require("./delHabit");
const modifyHabit = require("./modifyHabit");
const searchHabit = require("./searchHabit");
const login = require("./login");
const register = require("./register");

const router = new Router();

router.use("/createHabit", createHabit.routes(), createHabit.allowedMethods());
router.use("/delHabit", delHabit.routes(), delHabit.allowedMethods());
router.use("/modifyHabit", modifyHabit.routes(), modifyHabit.allowedMethods());
router.use("/searchHabit", searchHabit.routes(), searchHabit.allowedMethods());
router.use("/login", login.routes(), login.allowedMethods());
router.use("/register", register.routes(), register.allowedMethods());

module.exports = router;
