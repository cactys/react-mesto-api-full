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
      mode: 'no-cors',
      headers: this._headers,
    }).then(this._checkingResponse);
  }

  editUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      mode: 'cors',
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
      mode: 'no-cors',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then(this._checkingResponse);
  }

  getCards() {
    return fetch(`${this._url}/cards`, {
      method: 'GET',
      mode: 'no-cors',
    }).then(this._checkingResponse);
  }

  addCard(data) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      mode: 'no-cors',
      headers: this._headers,
      body: JSON.stringify({
        name: data.title,
        link: data.link,
      }),
    }).then(this._checkingResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      mode: 'no-cors',
      headers: this._headers,
    }).then(this._checkingResponse);
  }

  changeLikeCardStatus(id, state) {
    return state ? this.putLike(id) : this.deletLike(id);
  }

  putLike(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: 'PUT',
      mode: 'no-cors',
      headers: this._headers,
      credentials: 'include',
    }).then(this._checkingResponse);
  }

  deletLike(id) {
    return fetch(`${this._url}/cards/likes/${id}`, {
      method: 'DELETE',
      mode: 'no-cors',
    }).then(this._checkingResponse);
  }

  getAllPromise() {
    return Promise.all([this.getUser(), this.getCards()]);
  }
}

export const api = new Api({
  baseUrl: 'https://api.cactys.nomoredomains.icu',
  headers: {
    'authorization': `Bearer ${localStorage.getItem('jwt')}`,
    'Content-Type': 'application/json',
  },
});
