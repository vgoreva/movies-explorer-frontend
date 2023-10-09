import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.svg'
import avatar from '../../images/avatar.svg'
import menu from '../../images/menu.svg'
import close from '../../images/close.svg'
import { useState } from 'react';

function Header({ name }) {

    const navigate = useNavigate()

    const [menuActive, setMenuActive] = useState(false);

    return (
        <header className={name === "main" ? "header" : "header header_theme_white"}>
                <img
                    className="header__logo"
                    src={logo}
                    alt="Логотип"
                />

                {name === "main" ?
                    <nav className='header__menu'>
                        <Link to={"/signup"} className="header__link">Регистрация</Link>
                        <button className="header__button" onClick={() => navigate('/signin')} >Войти</button>
                    </nav> :
                    <>
                    <nav className={!menuActive ? "header__menu" : "header__menu header__menu_active header__menu_opened" } >
                        <ul className={!menuActive ? 'header__navtab' : "header__navtab header__navtab_active"}>
                            <img
                                className={menuActive ? "header__menu-close header__menu-close_active" : "header__menu-close"}
                                src={close}
                                alt="Закрыть"
                                onClick={() => setMenuActive(!menuActive)}
                            />
                            <li className='header__navtab-item'>
                                <Link to={"/"} className="header__link header__link_theme_vertical">Главная</Link></li>
                            <li className='header__navtab-item'>
                                <Link to={"/movies"} className="header__link header__link_theme_vertical">Фильмы</Link></li>
                            <li className='header__navtab-item'>
                                <Link to={"/saved-movies"} className="header__link header__link_theme_vertical">Сохранённые фильмы</Link></li>
                            <li className='header__navtab-item'>
                                <div className='header__account'>
                                    <Link to={"/profile"} className="header__link header__link_theme_vertical">Аккаунт</Link>
                                    <div className='header__avatar'>
                                        <img
                                            className='header__icon'
                                            src={avatar}
                                            alt="Аватар" />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    {!menuActive ? <img
                    className="header__menu-icon"
                    src={menu}
                    alt="Меню"
                    onClick={() => setMenuActive(!menuActive)}
                /> :
                    ""}
            </>
            }
        </header >
    )
}

export default Header;
