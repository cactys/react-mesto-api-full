[![Tests](https://github.com/cactys/express-mesto-gha/actions/workflows/tests-13-sprint.yml/badge.svg)](https://github.com/cactys/express-mesto-gha/actions/workflows/tests-13-sprint.yml) [![Tests](https://github.com/cactys/express-mesto-gha/actions/workflows/tests-14-sprint.yml/badge.svg)](https://github.com/cactys/express-mesto-gha/actions/workflows/tests-14-sprint.yml)
# Проект Mesto бэкенд

## Настройка бейджей статуса тестов
Перед началом работы над проектом рекомендуется исправить бейджи, отражающие статус прохождения тестов.
Для этого замените разметку бейджей на следующий фрагмент, подставив вместо `${имя_пользователя}` и `${имя_репозитория}` соответствующие значения.

```
[![Tests for sprint 13](https://github.com/${имя_пользователя}/${имя_репозитория}/actions/workflows/tests-13-sprint.yml/badge.svg)](https://github.com/${имя_пользователя}/${имя_репозитория}/actions/workflows/tests-13-sprint.yml) 

[![Tests for sprint 14](https://github.com/${имя_пользователя}/${имя_репозитория}/actions/workflows/tests-14-sprint.yml/badge.svg)](https://github.com/${имя_пользователя}/${имя_репозитория}/actions/workflows/tests-14-sprint.yml)
```


## 📂 Директории

`/routes` — папка с файлами роутера  
`/controllers` — папка с файлами контроллеров пользователя и карточки   
`/models` — папка с файлами описания схем пользователя и карточки  
  
Остальные директории вспомогательные, создаются при необходимости разработчиком

### 📝 Запросы:

* `GET` /users — получить всех пользователей
* `GET` /users/:userId — поучить пользователя по _id
* `POST` /users — создать пользователя
    - `name` — имя пользователя, строка от 2 до 30 символов, обязательное поле;
    - `about` — информация о пользователе, строка от 2 до 30 символов, обязательное поле;
    - `avatar` — ссылка на аватарку, строка, обязательное поле.
* `PATCH` /users/me — обновить профиль пользователя
* `PATCH` /users/me/avatar — обновить аватар пользователя
* `GET` /cards — получить все карточки
* `POST` /cards — создать карточку
    - `name` — имя карточки, строка от 2 до 30 символов, обязательное поле;
    - `link` — ссылка на картинку, строка, обязательно поле;
    - `owner` — ссылка на модель автора карточки, тип ObjectId, обязательное поле;
    - `likes` — список лайкнувших пост пользователей, массив ObjectId, по умолчанию — пустой массив (поле `default`);
    - `createdAt` — дата создания, тип `Date`, значение по умолчанию `Date.now`.
* `DELETE` /cards/:cardId — удалить карточку по _id
* `PUT` /cards/:cardId/likes — лайк карточке
* `DELETE` /cards/:cardId/likes — дизлайк карточки

### ❗ Обработка ошибок
* `400` — переданы некорректные данные в методы создания карточки, пользователя, обновления аватара пользователя или профиля;
* `404` — карточка или пользователь не найден.
* `500` — ошибка по-умолчанию.
___
### 🔨 Стэк:
+ ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
+ ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
+ ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
+ ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
  + `mongoose`

### 🔧 Инструкция:
1. Установить [Node.js](https://nodejs.org/en/ "ссылка на сайт Node.js")
2. Установить [Git](https://git-scm.com/ "ссылка на сайт Git")
3. Скачайть или склонировать себе командой:
```sh
    git clone https://github.com/cactys/express-mesto-gha.git
```
4. Установите зависимости:
```sh
    npm i
```
5. Запустить проект:
  - запускает сервер
```sh
    npm run start
```
- запускает сервер с hot-reload
```sh
    npm run dev
```
