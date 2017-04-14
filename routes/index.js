const Router = require('koa-router');
const home = require('./home');
const jwt = require('./jwt');
const user = require('./user');
const transaction = require('./transaction');
const simulation = require('./simulation');
const wallet = require('./wallet');

const router = new Router();

router.use('/', home.routes());
router.use('/user', jwt.unless({ method: 'POST' }), user.routes());
router.use(jwt);
router.use('/transaction', transaction.routes());
router.use('/simulation', simulation.routes());
router.use('/wallet', wallet.routes());

module.exports = router;
