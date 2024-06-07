export function roleUser(req, res, next) {
  req.body.role = 'user';
  next();
}

export function roleAdmin(req, res, next) {
  req.body.role = 'admin';
  next();
}
