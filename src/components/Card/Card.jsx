import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

function Card({ name, card, savedMovies, onDelete, addMovie }) {
    const { pathname } = useLocation();
    const [click, setClick ] = useState(false); 

    useEffect(() => {
        if (pathname === "/movies")
        setClick(savedMovies.some(el => card.id === el.movieId))
    }, [savedMovies, card.id, setClick, pathname])

   function OnClick() {
    if (savedMovies.some(el => card.id === el.movieId)) {
        setClick(true)
        addMovie(card)
    } else {
        setClick(false)
        addMovie(card)
    }
   }

   function convertTime(duration) {
    const minutes = duration % 60;
    const hours = Math.floor(duration / 60);
    return (hours === 0 ? `${minutes}м` : minutes === 0 ? `${hours}ч` : `${hours}ч ${minutes}м`)
   }
    return (
        <div className="card__container">
            <img
                className="card__image"
                src={pathname === '/movies' ? `https://api.nomoreparties.co/${card.image.url}` : card.image}
                alt={card.nameRU}
            />
            {pathname === '/saved-movies' ? 
                <button 
                    className="card__delete"
                    type="button"
                    onClick={() => onDelete(card._id)}/>
                : <button
                    className={!click ? "card__save-button" : "card__mark-icon"}
                    type="button"
                    onClick={OnClick}
                >{!click ? "Сохранить" : ""}</button>}
            <Link to={card.trailerLink} className="card__title">{card.nameRU}</Link>
            <span className="card__duration">{convertTime(card.duration)}</span>
        </div>
    )
}

export default Card;