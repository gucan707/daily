const Router = require("koa-router");
const { User } = require("../models/habit");

const searchHabit = new Router();

searchHabit.get("/", async (ctx) => {
  const { username, habitName, detail, begin, end } = ctx.request.query;
  const habitReg = new RegExp(habitName.trim());
  const user = await User.findOne({ username });
  const habits = user.habits.filter((habit) =>
    habitName !== undefined
      ? habit.habitName.match(habitReg)
      : getUnDone(habit.log[habit.log.length - 1], begin, end)
  );

  ctx.body = habits;
});

function getUnDone(doneAt, begin, end) {
  const diff = (Date.now() - doneAt) / 1000 / 60 / 60;
  if (diff < 24) {
    return begin < doneAt && end > doneAt;
  } else {
    return begin < -1 && end > -1;
  }
}

module.exports = searchHabit;
