const Router = require("koa-router");
const createHabit = new Router();

const koaBody = require("koa-body");
const { User } = require("../models/habit");

createHabit.post("/", async (ctx) => {
  const habit = ctx.request.body;
  const user = await User.findOne({ username: habit.username });
  user.habits.push(habit.habit);
  user.markModified("habits");
  user.save((err, user) => {
    if (err) console.log(err);
  });
  ctx.body = {
    status: 200,
    msg: "增加成功",
    data: user,
  };
});

module.exports = createHabit;
