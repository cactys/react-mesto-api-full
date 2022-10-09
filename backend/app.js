const express = require('express');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const bodyParser = require('body-parser');
// const cors = require('cors');
const cookieParser = require('cookie-parser');
const cards = require('./routes/cards');
const users = require('./routes/users');
const auth = require('./middlewares/auth');
const cors = require('./middlewares/cors');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const routes = require('./routes');
const NotFoundError = require('./errors/not-found-err');
const { ERROR_500 } = require('./utils/code');
// const { allowedCors } = require('./utils/allowed-cors');

const { PORT = 3030 } = process.env;

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
});

app.listen(PORT);

app.use(requestLogger); // логгер запросов

app.use(cors);

app.use('/', routes);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.use(auth);

app.use('/users', users);
app.use('/cards', cards);

app.use((req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

app.use(errorLogger); // логгер ошибок

app.use(errors()); // обработчик ошибок celebrate

// централизованный обработчик ошибок
app.use((err, req, res, next) => {
  const { statusCode = ERROR_500, message } = err;

  res
    .status(statusCode)
    .send({
      message: statusCode === ERROR_500
        ? 'На сервере произошла ошибка'
        : message,
    });

  next();
});
