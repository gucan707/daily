const Router = require("koa-router");
const { User } = require("../models/habit");

const delHabit = new Router();

delHabit.delete("/", async (ctx) => {
  const { username, _id } = ctx.request.query;
  const user = await User.findOne({ username });
  const newHabits = user.habits.filter((habit) => habit._id != _id);
  user.habits = newHabits;
  user.markModified("habits");
  user.save();
  ctx.body = user;
});

module.exports = delHabit;
