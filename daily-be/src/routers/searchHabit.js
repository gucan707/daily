const Router = require("koa-router");
const koaBody = require("koa-body");
const { User } = require("../models/habit");

const searchHabit = new Router();

module.exports = searchHabit;
