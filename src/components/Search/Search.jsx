import { useEffect } from "react";
import search from "../../images/search.svg";
import { useNavigate } from "react-router";

function Search({ isMark, searchRequest, setSearchRequest, searchMovies, searchedMovies, chooseShorts, isError, setIsError }) {
    const navigate = useNavigate()

    useEffect(() =>{
    if (localStorage.movie){
        setSearchRequest(JSON.parse(localStorage.movie))}
    else {
        setSearchRequest("")
    }}, [navigate, setSearchRequest])

    function onSubmit(evt) {
        evt.preventDefault()
        if (evt.target.search.value) {
            searchMovies(searchRequest)
            setIsError(false)
        } else (
            setIsError(true)
        )
    }

    return (
        <div className="movies__search-area">
            <form className="movies__form" onSubmit={onSubmit}>
                <div className="movies__search-container">
                    <img
                        className="movies__icon"
                        src={search}
                        alt="Искать" />
                    <input
                        className="movies__search"
                        type="search"
                        name="search"
                        placeholder="Фильм"
                        value={searchRequest}
                        onChange={(evt) => {
                            setIsError(false)
                            setSearchRequest(evt.target.value);
                        }} />
                    <button
                        className="movies__button"
                        type="submit">Найти</button>
                </div>

                <div className="movies__switch-container">
                    <label className="movies__switch">
                        <input className="movies__checkbox" type="checkbox" onChange={chooseShorts} />
                        <span className={isMark ? "movies__slider" : "movies__slider movies__slider_switch-on"}></span>
                    </label>
                    <p className="movies__short-film">Короткометражки</p>
                </div>
            </form>
            <span className={isError ? "search__error search__error_active" : "search__error"}>Нужно ввести ключевое слово</span>
        </div>
    )
}

export default Search