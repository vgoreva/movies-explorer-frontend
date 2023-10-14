import { Link } from "react-router-dom";
import link from "../../images/link.svg"

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>
            <ul className="portfolio__container">
                <li className="portfolio__line">
                    <Link to={"https://github.com/vgoreva/how-to-learn"} className="portfolio__link" target="_blank">
                        <p className="portfolio__name">Статичный сайт</p></Link>
                    <img className="portfolio__icon" src={link} alt="Ссылка" />
                </li>
                <li className="portfolio__line">
                    <Link to={"https://vgoreva.github.io/russian-travel/"} className="portfolio__link" target="_blank">
                        <p className="portfolio__name">Адаптивный сайт</p></Link>
                        <img className="portfolio__icon" src={link} alt="Ссылка" />
                </li>
                <li className="portfolio__line">
                    <Link to={"https://github.com/vgoreva/react-mesto-auth"} className="portfolio__link" target="_blank">
                        <p className="portfolio__name">Одностраничное приложение</p></Link>
                    <img className="portfolio__icon" src={link} alt="Ссылка" />
                </li>
            </ul>
        </section>
    )
}

export default Portfolio
