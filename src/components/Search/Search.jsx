import { useState } from "react";
import search from "../../images/search.svg";

function Search() {
    const [checked, setChecked] = useState(true);

    function handleChange() {
        setChecked(!checked)
    }

    return (
        <>
            <form className="movies__form">
                <div className="movies__search-container">
                    <img
                        className="movies__icon"
                        src={search}
                        alt="Искать" />
                    <input className="movies__search" type="search" placeholder="Фильм" />
                    <button className="movies__button">Найти</button>
                </div>
                <div className="movies__switch-container">
                    <label className="movies__switch">
                        <input className="movies__checkbox" type="checkbox" onChange={handleChange} />
                        <span className={!checked ? "movies__slider" : "movies__slider movies__slider_switch-on"}></span>
                    </label>
                    <p className="movies__short-film">Короткометражки</p>
                </div>
            </form>
        </>
    )
}

export default Search