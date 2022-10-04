module.exports.options = {
  origin: [
    'https://cactys.nomoredomains.icu/',
    'http://localhost:3000',
  ],
  methods: [
    'GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE',
  ],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: [
    'Content-Type', 'origin', 'Authorization',
  ],
  credentials: true,
};
