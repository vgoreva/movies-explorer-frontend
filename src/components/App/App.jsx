import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <div className="app__content">
        <Routes>
          <Route path='/' element={
            <div>
              <Header
                name = 'main' />
              <Main />
              <Footer />
            </div>
          } />

          <Route path='/signup' element={
            <Register />
          } />

          <Route path='/signin' element={
            <Login />
          } />

          <Route path='/profile' element={
            <div>
              <Header />
              <Profile/>
            </div>
          } />

          <Route path='/movies' element={
            <div>
              <Header />
              <Movies />
              <Footer />
            </div>
          } />

          <Route path='/saved-movies' element={
            <div>
              <Header />
              <SavedMovies />
              <Footer />
            </div>
          } />

          <Route path='*' element={<NotFound />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
