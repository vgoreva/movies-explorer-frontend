function NavTab() {
    return (
        <section className="navtab">
            <nav className="navtab__list">
                <ul className="navtab__container">
                <li className="navtab__string"> <a href={"#about"} className="navtab__link">О проекте</a></li>
                <li className="navtab__string"> <a href={"#techs"} className="navtab__link">Технологии</a></li>
                <li className="navtab__string"> <a href={"#student"} className="navtab__link">Студент</a></li>
                </ul>
            </nav>
        </section>
    )
}

export default NavTab
