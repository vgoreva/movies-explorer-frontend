import { Link } from "react-router-dom";
import photo from "../../images/photo.jpg"

function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="about-me__title">Студент</h2>
            <div className="about-me__container">
                <div className="about-me__card">
                    <p className="about-me__name">Горева Влада</p>
                    <p className="about-me__details">Студентка Практикума, 29 лет</p>
                    <p className="about-me__description">Я из города Мегион. В 18 лет переехала в Санкт-Петербург учиться в СПБГУ.
                        У меня есть муж и кот. Я люблю готовить, а ещё увлекаюсь плаванием. Недавно начала кодить.
                        С 2019 года работаю в компании «КРИОН», где занимаюсь закупками и организацией хранения.</p>
                    <Link to={"https://github.com/vgoreva"} className="about-me__link" target="_blank">Github</Link>
                </div>
                <img className="about-me__photo" src={photo} alt="Моя фотография" />
            </div>
        </section>
    )
}

export default AboutMe
