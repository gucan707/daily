const Router = require("koa-router");
const register = new Router();
const koaBody = require("koa-body");
const { User } = require("../models/habit");
const sha256 = require("../util/sha256");

register.post("/", koaBody(), async (ctx) => {
  const userObj = ctx.request.body;
  userObj.password = sha256(userObj.password); // TODO 记得改
  const username = await User.findOne({ username: userObj.username });
  if (!username) {
    await User.create({
      username: userObj.username,
      password: userObj.password,
      habits: [],
    });
    ctx.body = {
      status: 200,
      msg: "注册成功",
    };
  } else {
    ctx.body = {
      status: 401,
      msg: "用户名重复",
    };
  }
});

module.exports = register;
