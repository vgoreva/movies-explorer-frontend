function AboutProject() {
    return (
        <section className="about">
            <div className="about__container">
                <h2 className="about__title">О проекте</h2>
                <div className="about__section">
                    <div className="about__card">
                        <h3 className="about__subtitle">Дипломный проект включал 5 этапов</h3>
                        <p className="about__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                    </div>
                    <div className="about__card">
                        <h3 className="about__subtitle">На выполнение диплома ушло 5 недель</h3>
                        <p className="about__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                    </div>
                </div>
                <div className="about__chart">
                    <div className="about__chart-segment about__chart-segment_theme_dark">1 неделя</div>
                    <div className="about__chart-segment">4 недели</div>
                    <span className="about__chart-caption">Back-end</span>
                    <span className="about__chart-caption">Front-end</span>
                </div>
            </div>
        </section >
    )
}

export default AboutProject
