const Router = require("koa-router");
const { User } = require("../models/habit");

const searchHabit = new Router();

searchHabit.get("/", async (ctx) => {
  const { username, habitName, detail, begin, end } = ctx.request.query;
  const habitReg = new RegExp("[" + habitName + "]");
  const user = await User.findOne({ username });
  const habits = user.habits.filter((habit) =>
    habitName !== undefined
      ? habit.habitName.match(habitReg)
      : begin < habit.doneAt && end > habit.doneAt
  );

  ctx.body = habits;
});

module.exports = searchHabit;
