const Router = require('koa-router');
const Transaction = require('../models/transaction');

const router = new Router();

router.post('/', async (ctx) => {
  const body = ctx.request.body;
  body.user = ctx.state.user.id;
  const transaction = await new Transaction(body).save();
  ctx.body = transaction;
});

router.get('/:wallet', async (ctx) => {
  const transactions = await Transaction.find({
    user: ctx.state.user.id,
    wallet: ctx.params.wallet,
  });
  ctx.body = transactions;
});

router.get('/:wallet/:id', async (ctx) => {
  const transaction = await Transaction.findOne({
    user: ctx.state.user.id,
    wallet: ctx.params.wallet,
    _id: ctx.params.id,
  });
  ctx.body = transaction;
});

router.put('/:id', async (ctx) => {
  const transaction = await Transaction.findOneAndUpdate({
    user: ctx.state.user.id,
    _id: ctx.params.id,
  }, ctx.request.body, { new: true });
  ctx.body = transaction;
});

module.exports = router;
