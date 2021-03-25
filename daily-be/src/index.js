const Koa = require("koa");
const app = new Koa();
const router = require("./routers/router");

app.use(router.routes(), router.allowedMethods());

app.listen(8080);
