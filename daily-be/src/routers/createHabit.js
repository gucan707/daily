const Router = require("koa-router");
const { User } = require("../models/habit");

const createHabit = new Router();

createHabit.post("/", async (ctx) => {
  const { habit, username } = ctx.request.body;
  const user = await User.findOne({ username });
  user.habits.push(habit);
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
