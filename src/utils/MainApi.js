 class MainApi {
    constructor(options) {
        this._url = options.baseUrl;
    }

    _getResponseData(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }

    registration(data) {
        return fetch(`${this._url}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.username,
                email: data.email,
                password: data.password,
            })
        })
        .then(this._getResponseData)
    } 

    authorization(data) {
        return fetch(`${this._url}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password,
            })
        })
        .then(this._getResponseData)

    }

    getUserInfo(token) {
        return fetch(`${this._url}/users/me`, {
            headers: {
                "Authorization": `Bearer ${token}`
            },
        })
            .then(res => this._getResponseData(res));
    }

    getUser(token) {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        })
            .then(res => this._getResponseData(res));
    }

    getCards(token) {
        return fetch(`${this._url}/movies`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
        })
        .then(this._getResponseData)
    };


    setUserInfo(data, token) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                name: data.username,
                email: data.email,
            })
        })
            .then(res => this._getResponseData(res));
    }

    createCard(data, token) {
        return fetch(`${this._url}/movies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                country: data.country,
                director: data.director,
                duration: data.duration,
                year: data.year,
                description: data.description,
                image: `https://api.nomoreparties.co${data.image.url}`,
                trailerLink: data.trailerLink,
                thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
                movieId: data.id,
                nameRU: data.nameRU,
                nameEN: data.nameEN
            })
        })
            .then(res => this._getResponseData(res));
    }

    deleteCard(cardId, token) {
        return fetch(`${this._url}/movies/${cardId}`, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then(res => this._getResponseData(res));
    }

}

const mainApi = new MainApi({
    // baseUrl: 'https://api.goreva.diploma.nomoredomainsrocks.ru',
    baseUrl: 'http://localhost:3000',
})

export default mainApi
