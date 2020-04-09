const Koa = require('koa');

const app = new Koa();

app.listen(4000, () => {
    console.log(`Server started on port 4000`);
});
