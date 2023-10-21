import { useContext, useEffect } from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';


function ProfileForm({children, setIsError, isError, onLogout, onSubmit, setIsSucces, isSuccess, isEdit }) {

    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        setIsError(false)
    }, [setIsError])

    useEffect(() => {
        setIsSucces(false)
    }, [setIsSucces])

    return (
        <main className="main">
            <section className="profile">
                <h1 className="profile__greeting">{`Привет, ${currentUser.name}!`}</h1>
                <form className="profile__table" onSubmit={onSubmit}>
                    {children}
                {!isSuccess ? "" : <span className="profile__message">Данные сохранены</span>}
                {!isError ? "" : <span className="profile__message">Что-то пошло не так</span>}
                {isEdit && !isSuccess ? <button className="profile__edit" type="submit" >Редактировать</button> : ""}
                <button className="profile__logout" type="button" onClick={onLogout}>Выйти из аккаунта</button>
                </form>
            </section>
        </main>
    )
}

export default ProfileForm