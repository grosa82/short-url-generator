const controllers = require('./controllers');

module.exports = function (app) {
  app.route('/url/create').post(controllers.create);
  app.route('/:code').get(controllers.get);
};