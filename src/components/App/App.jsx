import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';

import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import mainApi from "../../utils/MainApi.js";

import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Preloader from '../Preloader/Preloader';

function App() {
  //Состояния(стейты) данных авторизации 
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false)

  // Состояние пользователя 
  const [currentUser, setCurrentUser] = useState({});

  //Состояния карточек
  const [savedMovies, setSavedMovies] = useState([]);

  //Состояния(стейты) прелоадеров
  const [isSend, setIsSend] = useState(false);
  const [isReady, setIsReady] = useState(true);

  //Хук навигации
  const navigate = useNavigate()

  // Обработчик входа в аккаунт
  function handleLogin(data) {
    setIsSend(true);
    mainApi.authorization(data)
      .then(res => {
        localStorage.setItem('jwt', res.token);
        setLoggedIn(true);
        window.scrollTo(0, 0);
        navigate('/movies');
      })
      .catch(error => {
        setIsError(true);
        console.log(`Ошибка: ${error}`)
      })
      .finally(() => {
        setIsSend(false)
      })
  }

  // Обработчик регистрации
  function handleRegister(data) {
    setIsSend(true);
    mainApi.registration(data)
      .then((res) => {
        if (res) {
          setLoggedIn(false)
          mainApi.authorization(data)
            .then(res => {
              localStorage.setItem('jwt', res.token);
              setLoggedIn(true);
              window.scrollTo(0, 0);
              navigate('/movies');
            })
            .catch((error) => {
              setIsError(true);
              console.log(`Ошибка при регистрации: ${error}`);
            })
            .finally(() => {
              setIsSend(false)
            })
        }
      })
      .catch((error) => {
        setIsError(true);
        console.log(`Ошибка при регистрации: ${error}`);
      })
      .finally(() => {
        setIsSend(false)
      })
    }

  //Обработчки выхода из профиля
  function handleLogout() {
          localStorage.clear();
          setLoggedIn(false);
          navigate('/');
        }

  //Изменения данных пользователя
  function handleUpdateUserdata(dataUser) {
          mainApi.setUserInfo(dataUser, localStorage.jwt)
            .then(res => {
              setCurrentUser(res);
              setIsSuccess(true);
            })
            .catch((error) => {
              setIsError(true);
              console.log(`Ошибка при редактировании данных пользователя: ${error}`);
            });
        }

  function handleDeleteCard(cardId) {
          mainApi.deleteCard(cardId, localStorage.jwt)
            .then(() => {
              setSavedMovies(savedMovies.filter(movie => { return movie._id !== cardId }))
            })
            .catch((error) =>
              console.log(`Ошибка при удалении карточки: ${error}`));
        }

  function handleToggleCard(cardId) {
          const isAdd = savedMovies.some(el => cardId.id === el.movieId)
          const searchAddedCard = savedMovies.filter((movie) => {
            return movie.movieId === cardId.id
          })
          if (isAdd) {
            handleDeleteCard(searchAddedCard[0]._id)
          } else {
            mainApi.createCard(cardId, localStorage.jwt)
              .then(res => {
                setSavedMovies([res, ...savedMovies])
              })
              .catch((error) =>
                console.log(`Ошибка при добавлении в избранное: ${error}`));
          }
        }

  useEffect(() => {
          if (localStorage.jwt) {
            Promise.all([mainApi.getUser(localStorage.jwt), mainApi.getCards(localStorage.jwt)])
              .then(([userData, cardData]) => {
                setSavedMovies(cardData)
                setCurrentUser(userData)
                setLoggedIn(true)
                setIsReady(false)
              })
              .catch((error) => {
                console.log(`Ошибка: ${error}`)
                setIsReady(false)
                localStorage.clear()
                setLoggedIn(false)
              })
          }
        }, [loggedIn])

  return (

      <div className="app">
        <div className="app__content">
          <CurrentUserContext.Provider value={currentUser}>
            {isReady ? <Preloader /> :
              <Routes>
                <Route path='/' element={
                  <div>
                    <Header
                      name='main'
                      loggedIn={loggedIn} />
                    <Main />
                    <Footer />
                  </div>
                } />

                <Route path='/signup' element={
                  <Register
                    onRegister={handleRegister}
                    isSend={isSend}
                    setIsError={setIsError}
                    isError={isError}
                  />
                } />

                <Route path='/signin' element={
                  <Login
                    onLogin={handleLogin}
                    isSend={isSend}
                    setIsError={setIsError}
                    isError={isError}
                  />
                } />

                <Route path='/profile'
                  element={
                    <ProtectedRoute loggedIn={loggedIn}>
                      <div>
                        <Header />
                        <Profile
                          setIsError={setIsError}
                          isError={isError}
                          setIsSuccess={setIsSuccess}
                          isSuccess={isSuccess}
                          onLogout={handleLogout}
                          onUpdateUser={handleUpdateUserdata}
                        />
                      </div>
                    </ProtectedRoute>
                  }
                />

                <Route path='/movies'
                  element={
                    <ProtectedRoute loggedIn={loggedIn}>
                      <div>
                        <Header />
                        <Movies
                          setIsError={setIsError}
                          isError={isError}
                          savedMovies={savedMovies}
                          addMovie={handleToggleCard}
                        />
                        <Footer />
                      </div>
                    </ProtectedRoute>
                  }
                />

                <Route path='/saved-movies'
                  element={
                    <ProtectedRoute loggedIn={loggedIn}>
                      <div>
                        <Header />
                        <SavedMovies
                          setIsError={setIsError}
                          savedMovies={savedMovies}
                          isError={isError}
                          onDelete={handleDeleteCard}
                        />
                        <Footer />
                      </div>
                    </ProtectedRoute>
                  }
                />

                <Route path='*' element={<NotFound />} />

              </Routes>
            }
          </CurrentUserContext.Provider>
        </div>
      </div>
    );
  }


  export default App;
