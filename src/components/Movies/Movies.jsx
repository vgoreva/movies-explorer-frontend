import Search from "../Search/Search";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useCallback, useEffect, useState } from "react";

import moviesApi from "../../utils/MoviesApi"
import { useNavigate } from "react-router";

function Movies({ setIsError, savedMovies, addMovie, isError }) {

    const navigate = useNavigate();

    const [allMovies, setAllMovies] = useState([]);
    const [searchedMovies, setSearchedMovies] = useState([]);
    const [searchRequest, setSearchRequest] = useState('');
    const [isMark, setMark] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setIsServerError] = useState(false);
    const [entrance, setEntrance] = useState(true);

    const filter = useCallback((search, isMark, movies) => {
        localStorage.setItem('movie', JSON.stringify(search))
        localStorage.setItem('shorts', JSON.stringify(isMark))
        localStorage.setItem('allmovies', JSON.stringify(movies))
        setSearchRequest(search)
        setSearchedMovies(movies.filter((movie) => {
            const searchInput = movie.nameRU.toLowerCase().includes(search.toLowerCase())
            return isMark ? (searchInput && movie.duration <= 40) : searchInput
        }))
    }, [])

    function searchMovies(search) {
        if (allMovies.length === 0) {
            setIsLoading(true)
            moviesApi.getMovies()
                .then((res) => {
                    setAllMovies(res)
                    setMark(false)
                    setIsServerError(false)
                    setEntrance(false)
                    filter(search, isMark, res)
                })
                .catch(() =>
                    setIsServerError(true)
                )
                .then(() =>
                    setIsLoading(false)
                )
        } else {
            filter(search, isMark, allMovies)
        }
    }

    useEffect(() => {
        if (localStorage.movie && localStorage.shorts && localStorage.allmovies) {
            const allMovies = JSON.parse(localStorage.allmovies)
            const search = JSON.parse(localStorage.movie)
            const shorts = JSON.parse(localStorage.shorts)
            setIsServerError(false)
            setSearchRequest(search)
            setMark(shorts)
            setAllMovies(allMovies)
            filter(search, shorts, allMovies)
        }
    }, [filter,navigate])

    function chooseShorts() {
        if (isMark) {
            setMark(false)
            filter(searchRequest, false, allMovies)
        } else {
            setMark(true)
            filter(searchRequest, true, allMovies)
        }
    }

    return (
        <main className="main">
            <section className="movies">
                <Search
                    isMark={isMark}
                    searchRequest={searchRequest}
                    setSearchRequest={setSearchRequest}
                    searchMovies={searchMovies}
                    searchedMovies={searchedMovies}
                    chooseShorts={chooseShorts}
                    setIsError={setIsError}
                    isError={isError}
                />
                <MoviesCardList
                    movies={searchedMovies}
                    savedMovies={savedMovies}
                    isLoading={isLoading}
                    serverError={serverError}
                    addMovie={addMovie}
                    entrance={entrance}
                />
            </section>
        </main>
    )
}

export default Movies