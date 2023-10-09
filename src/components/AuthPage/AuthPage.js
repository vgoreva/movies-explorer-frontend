import { Link } from "react-router-dom";
import logo from '../../images/logo.svg';

function AuthPage({ name, title, children, titleButton, onSubmit }) {
    return (
        <section className="login">
            <img
                className="login__logo"
                src={logo}
                alt="Логотип"
            />
            <h2 className="login__title">{title}</h2>
            <form className="login__form"
                name={`login_type_${name}`}
                noValidate=""
                onSubmit={onSubmit}>
                {children}
                <button className={`login__button login__button_type_${name}`}
                    type="submit">{titleButton}</button>
                {name === "register" ?
                    <span className="login__note">Уже зарегистрированы? <Link to={"/signin"} className="login__link"> Войти </Link> </span>
                    : <span className="login__note">Еще не зарегистрированы? <Link to={"/signup"} className="login__link"> Регистрация </Link> </span>}
            </form>
        </section>
    )
}

export default AuthPage