const Koa = require("koa");
const cors = require("@koa/cors");
const koaBody = require("koa-body");
const router = require("./routers/router");

const app = new Koa();

app
  .use(cors())
  .use(koaBody())

  .use(router.routes())
  .use(router.allowedMethods())

  .listen(8080);
