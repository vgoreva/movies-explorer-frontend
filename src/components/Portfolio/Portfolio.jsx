import { Link } from "react-router-dom";
import link from "../../images/link.svg"

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__container">
                <li className="portfolio__line">
                    <p className="portfolio__name">Статичный сайт</p>
                    <Link to={"#"} className="portfolio__link" target="_blank" src={link} alt="Ссылка"><img className="portfolio__icon" src={link} alt="Ссылка" /></Link>
                </li>
                <li className="portfolio__line">
                    <p className="portfolio__name">Адаптивный сайт</p>
                    <Link to={"#"} className="portfolio__link" target="_blank"><img className="portfolio__icon" src={link} alt="Ссылка" /></Link>
                </li>
                <li className="portfolio__line">
                    <p className="portfolio__name">Одностраничное приложение</p>
                    <Link to={"#"} className="portfolio__link" target="_blank"><img className="portfolio__icon" src={link} alt="Ссылка" /></Link>
                </li>
            </ul>
        </section>
    )
}

export default Portfolio
