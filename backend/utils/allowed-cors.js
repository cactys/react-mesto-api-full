module.exports.allowedCors = {
  origin: [
    'https://cactys.nomoredomains.icu/',
    'http://localhost:3000',
  ],
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  credentials: true,
  headers: 'access-control-request-headers',
};
