import { useState } from "react";

function Card({ name, card }) {

    const [mark, setMark] = useState(false);

    return (
        <div className="card__container">
            <img
                className="card__image"
                src={card.link}
                alt={card.name}
            />
            {name === "fav" ? 
                <button 
                    className="card__delete"
                    type="button"/>
                : <button
                    className={!mark ? "card__save-button" : "card__mark-icon"}
                    type="button"
                    onClick={() => setMark(!mark)}
                >{!mark ? "Сохранить" : ""}</button>}
            <h2 className="card__title">{card.name}</h2>
            <span className="card__duration">{card.duration}</span>
        </div>
    )
}

export default Card;