const Router = require("koa-router");
const { User } = require("../models/habit");

const modifyHabit = new Router();

modifyHabit.post("/done", async (ctx) => {
  const { username, _id, doneAt, log } = ctx.request.body;
  const user = await User.findOne({ username });
  const newLog = {
    doneAt,
    log,
  };
  for (let i = 0; i < user.habits.length; i++) {
    if (habits[i]._id == _id) {
      habits[i].log.push(newLog);
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
    if (habits[i]._id == habit._id) {
      habit.log = habits[i].log;
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
