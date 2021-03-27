const Router = require("koa-router");
const koaBody = require("koa-body");
const { User } = require("../models/habit");

const delHabit = new Router();

delHabit.delete("/", koaBody(), (ctx) => {
  console.log(ctx.request.body);
  ctx.body = "1";
});

module.exports = delHabit;
