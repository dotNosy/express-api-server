exports.all = (req, res, next) => {
  res.json({
    message: 'TODO: LIST all sections',
  });
};

exports.read = (req, res, next) => {
  const { params = {} } = req;
  const { id } = params;

  res.json({
    id,
    message: 'TODO: GET one section by id',
  });
};

exports.create = (req, res, next) => {
  const { body = {} } = req;

  res.json({
    body,
    message: 'TODO: CREATE section',
  });
};

exports.update = (req, res, next) => {
  const { body = {}, params = {} } = req;
  const { id } = params;

  res.json({
    id,
    body,
    message: 'TODO: UPDATE section',
  });
};

exports.delete = (req, res, next) => {
  const { params = {} } = req;
  const { id } = params;

  res.json({
    id,
    message: 'TODO: DELETE section',
  });
};
