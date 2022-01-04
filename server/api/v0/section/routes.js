const router = require('express').Router();
const controller = require('./controller');

/*
 *   /api/section/ [GET] -> Read all
 *   /api/section/ [POST] -> Create
 *   /api/section/:id [GET] -> Read one
 *   /api/section/:id [PUT] -> update
 *   /api/section/:id [DELETE] -> delete
 */

router.route('/').get(controller.all).post(controller.create);

router
  .route('/:id')
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete);

module.exports = router;
