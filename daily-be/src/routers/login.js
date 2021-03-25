const Router = require("koa-router");
const login = new Router();

const koaBody = require("koa-body");
const { User } = require("../models/habit");
const sha256 = require("../util/sha256");

login.post("/", koaBody(), async (ctx) => {
  const userObj = ctx.request.body;
  const username = await User.findOne({ username: userObj.username });
  if (!username) {
    ctx.body = {
      status: 401,
      msg: "用户名不存在",
    };
  } else {
    userObj.password = sha256(userObj.password); // TODO 记得改
    const pw = await User.findOne({ password: userObj.password });
    if (!pw)
      ctx.body = {
        status: 401,
        msg: "密码错误",
      };
    else
      ctx.body = {
        status: 200,
        msg: "登录成功",
      };
  }
});

module.exports = login;
