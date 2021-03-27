const Router = require("koa-router");
const { User } = require("../models/habit");

const modifyHabit = new Router();

modifyHabit.post("/done", async (ctx) => {
  const { username, habitName, doneAt, log } = ctx.request.body;
  const user = await User.findOne({ username });
  for (let i = 0; i < user.habits.length; i++) {
    if (habits[i].habitName === habitName) {
      habits[i].doneAt = doneAt;
      habits[i].log = log;
      break;
    }
  }
  ctx.status = 200;
});

modifyHabit.post("/edit", async (ctx) => {
  const { username, habit } = ctx.request.body;
  const user = await User.findOne({ username });
  for (let i = 0; i < user.habits.length; i++) {
    if (habits[i].id === habit.id) {
      habits[i] = habit;
      break;
    }
  }
  ctx.status = 200;
});

module.exports = modifyHabit;
