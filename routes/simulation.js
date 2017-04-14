const simulation = require('../src/modules/simulation');

const Router = require('koa-router');

const router = new Router();

router.get('/', async (ctx) => {
});

router.post('/', async (ctx) => {
    console.log(ctx.params);
    ctx.body = simulation(1000, 10, 6.0/100, 4.85/100);
});

module.exports = router;
