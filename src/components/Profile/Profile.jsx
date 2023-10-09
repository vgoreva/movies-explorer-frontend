import { Link } from "react-router-dom"

function Profile() {
    return (
        <section className="profile">
            <h1 className="profile__greeting">Привет, Виталий!</h1>
                <table className="profile__table">
                    <tr className="profile__line">
                        <td className="profile__cell-name">Имя</td>
                        <td className="profile__cell-content">Виталий</td>
                    </tr>
                    <tr className="profile__line">
                        <td className="profile__cell-name">E-mail</td>
                        <td className="profile__cell-content">pochta@yandex.ru</td>
                    </tr>
                </table>
                <Link to={"#"} className="profile__edit">Редактировать</Link>
                <Link to={"/signin"} className="profile__logout">Выйти из аккаунта</Link>
        </section>
    )
}

export default Profile