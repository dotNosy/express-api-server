const router = require('express').Router();

const section = require('./section/routes');

router.route('/').get((req, res, next) => {
  res.json({
    message: 'This is your api',
  });
});

router.use('/section', section);

module.exports = router;
