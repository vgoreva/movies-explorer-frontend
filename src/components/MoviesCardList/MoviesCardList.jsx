import { useEffect, useState } from "react";
import Card from "../Card/Card";
import Preloader from "../Preloader/Preloader";
import { useLocation } from "react-router";

function MoviesCardList({ movies, savedMovies, isLoading, serverError, onDelete, addMovie, entrance }) {

    const { pathname } = useLocation()
    
    const [count, setCount] = useState('')
    const searchedMoviesOrder = movies.slice(0, count)

    function arrangeCards() {
        const counter = { initialQuantity: 12, step: 3 }
        if (window.innerWidth <= 1279) {
            counter.initialQuantity = 8
            counter.step = 2
        }
        if (window.innerWidth <= 889) {
            counter.initialQuantity = 5
            counter.step = 2
        }
        return counter
    }

    useEffect(() => {
        if (pathname === '/movies') {
            setCount(arrangeCards().initialQuantity)
            function resize() {
                if (window.innerWidth > 768) {
                    setCount(arrangeCards().initialQuantity)
                }
                if (window.innerWidth < 768) {
                    setCount(arrangeCards().initialQuantity)
                }
                if (window.innerWidth < 480) {
                    setCount(arrangeCards().initialQuantity)
                }
            }
            window.addEventListener('resize', resize)
            return () => window.removeEventListener('resize', resize)
        }
    }, [pathname, movies])

    function onMore() {
        setCount(count + arrangeCards().step)
    }

    return (
        <>
            <ul className="movies__card-area">
                {isLoading ? <Preloader /> :
                    (pathname === '/movies' && searchedMoviesOrder.length !== 0) ?
                    searchedMoviesOrder.map(data => {
                            return (
                                <li className="card" key={data.id}>
                                    <Card
                                        card={data}
                                        savedMovies={savedMovies}
                                        addMovie={addMovie}
                                    />
                                </li>
                            )
                        })
                        : movies.length !== 0 ?
                            movies.map(data => {
                                return (
                                    <li className="card" key={data._id}>
                                        <Card
                                            card={data}
                                            savedMovies={savedMovies}
                                            onDelete={onDelete}
                                        />
                                    </li>
                                )
                            })
                            :serverError ?
                                <span className="movies__notation">Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен.
                                    Подождите немного и попробуйте ещё раз</span>
                            : !entrance ?
                            <span className="movies__notation">Ничего не найдено</span> :
                                    ""
                }
                {count >= movies.length || pathname !== '/movies'?
                    "" :
                    <button className="movies__more-button" type="button" onClick={onMore}>Ещё</button> }
            </ul>
        </>
    )
}

export default MoviesCardList