const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/daily", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = mongoose.model(
  "user",
  new mongoose.Schema({
    username: { type: String, unique: true },
    password: { type: String },
    photo: { type: String },
    habits: [
      {
        id: { type: Number },
        habitName: { type: String }, // 习惯名
        bgc: { type: String }, // 16进制颜色
        icon: { type: String }, // icon路径
        times: { type: String }, // 一天中的时段
        doneAt: { type: Number }, // 完成时间
        target: {
          fixed: { type: Array }, // 固定每周目标
          weeks: { type: Number }, // 每周完成次数目标
          month: { type: Number }, // 每月完成次数目标
        },
        isEject: { type: Boolean }, // 打卡时是否自动弹出打卡日志
        remarks: { type: String }, // 习惯的备注
        creatAt: { type: String }, // 习惯创建时间
      },
    ],
  })
);

module.exports = { User };
