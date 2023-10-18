import Search from "../Search/Search";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import { useState, useEffect, useCallback } from "react";

function SavedMovies({ savedMovies, onDelete, isError, setIsError }) {

    const [favouriteMovies, setFavouriteMovies] = useState(savedMovies);
    const [searchRequest, setSearchRequest] = useState('');
    const [isMark, setMark] = useState(false);

    const filter = useCallback((search, isMark, movies) => {
        setSearchRequest(search)
        setFavouriteMovies(movies.filter((movie) => {
            const searchInput = movie.nameRU.toLowerCase().includes(search.toLowerCase())
            return isMark ? (searchInput && movie.duration <= 40) : searchInput
        })
        )
    }, [])

    function searchMovies(search) {
        filter(search, isMark, savedMovies)
    }

    useEffect(() => {
        filter(searchRequest, isMark, savedMovies)
    }, [filter, savedMovies, isMark, searchRequest])

    function chooseShorts() {
        if (isMark) {
            setMark(false)
            filter(searchRequest, false, savedMovies)
        } else {
            setMark(true)
            filter(searchRequest, true, savedMovies)
        }
    }

    return (
        <main className="main">
            <section className="saved-movies">
                <Search
                    isMark={isMark}
                    searchRequest={searchRequest}
                    setSearchRequest={setSearchRequest} 
                    isError={isError}
                    chooseShorts={chooseShorts}
                    setIsError={setIsError}
                    favouriteMovies={favouriteMovies}
                    searchMovies={searchMovies}
                    />
                <MoviesCardList
                    movies={favouriteMovies}
                    onDelete={onDelete}
                />
            </section>
        </main>
    )
}

export default SavedMovies