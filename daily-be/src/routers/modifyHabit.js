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
  user.markModified("habits");
  user.save();
  ctx.body = {
    msg: "ok",
  };
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
  user.markModified("habits");
  user.save();
  ctx.body = {
    msg: "ok",
  };
});

module.exports = modifyHabit;
