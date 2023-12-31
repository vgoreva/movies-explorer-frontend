import Card from "../Card/Card";
import Search from "../Search/Search";
import { useEffect, useState } from "react";
import cardData from "../../constants/cards";

function Movies() {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(cardData)
    }, [])

    return (
        <main className="main">
        <section className="movies">
            <div className="movies__search-area">
                <Search />
            </div>
            <ul className="movies__card-area">
                {cards.map(data => {
                    return (
                        <li className="card" key={data._id}>
                            <Card card={data} />
                        </li>
                    )
                })}
            </ul>
            <button className="movies__more-button" type="button">Ещё</button>
        </section>
        </main>
    )
}

export default Movies