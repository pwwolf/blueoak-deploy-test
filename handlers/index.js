exports.init = function(logger, app) {
  logger.info('Init handlers');

  app.get('/api/data', function(req, res) {
    res.json({message: 'It works!'})
  })
}