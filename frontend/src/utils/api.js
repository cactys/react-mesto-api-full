import { baseUrl } from "./base-url";

class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _checkingResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUser() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    }).then(this._checkingResponse);
  }

  editUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about,
      }),
    }).then(this._checkingResponse);
  }

  editAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then(this._checkingResponse);
  }

  getCards() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      credentials: 'include',
      headers: this._headers,
    }).then(this._checkingResponse);
  }

  addCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        name: data.title,
        link: data.link,
      }),
    }).then(this._checkingResponse);
  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers,
    }).then(this._checkingResponse);
  }

  changeLikeCardStatus(id, state) {
    return state ? this.putLike(id) : this.deletLike(id);
  }

  putLike(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: 'PUT',
      credentials: 'include',
      headers: this._headers,
    }).then(this._checkingResponse);
  }

  deletLike(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers,
    }).then(this._checkingResponse);
  }

  getAllPromise() {
    return Promise.all([this.getUser(), this.getCards()]);
  }
}

export const api = new Api({
  baseUrl: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});
