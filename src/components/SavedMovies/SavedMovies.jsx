import Search from "../Search/Search";
import Card from "../Card/Card";
import cardData from "../../constants/favouriteCards";
import { useState, useEffect } from "react";

function SavedMovies() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(cardData)
    }, [])

    return (
        <section className="saved-movies">
            <div className="movies__search-area">
                <Search />
            </div>
            <ul className="movies__card-area">
                {cards.map(data => {
                    return (
                        <li className="card" key={data._id}>
                            <Card
                                card={data}
                                name='fav' />
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default SavedMovies