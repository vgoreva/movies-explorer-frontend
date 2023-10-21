import { useContext, useEffect, useState } from "react";
import ProfileForm from "../ProfileForm/ProfileForm";
import CurrentUserContext from '../../contexts/CurrentUserContext';

function Profile({ setIsError, isError, onLogout, onUpdateUser, isSuccess, setIsSuccess }) {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [isEdit, setIsEdit] = useState(false)

    const currentUser = useContext(CurrentUserContext);

    const inputs =
        [{
            type: "text",
            name: "username",
            id: "username",
            placeholder: "Имя",
            required: true,
            value: userName || "",
            onChange: (evt) => {
                setIsError(false)
                setIsSuccess(false)
                setUserName(evt.target.value);
            },
            key: 1
        },
        {
            type: "email",
            name: "email",
            id: "email",
            placeholder: "E-mail",
            required: true,
            value: email || "",
            onChange: (evt) => {
                setIsError(false)
                setIsSuccess(false)
                setEmail(evt.target.value);
            },

            key: 2
        }]

    useEffect(() => {
        setUserName(currentUser.name);
        setEmail(currentUser.email);
    }, []);

    useEffect(() => {
        if (currentUser.name === userName && currentUser.email === email) {
            setIsEdit(false)
        } else {
            setIsEdit(true)
        }
    });

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateUser({
            username: userName,
            email: email,
        });
    }

    return (
        <ProfileForm
            onLogout={onLogout}
            onSubmit={handleSubmit}
            setIsError={setIsError}
            isError={isError}
            setIsSucces={setIsSuccess}
            isSuccess={isSuccess}
            isEdit={isEdit}
        >
            {inputs.map(({ type, name, id, placeholder, required, value, onChange, errorMesage, key }) => {
                return <div className="profile__line" key={key}>
                    <div className="profile__cell-name">{placeholder}</div>
                    <input
                        className="profile__cell-content"
                        type={type}
                        id={id}
                        name={name}
                        placeholder={placeholder}
                        required={required}
                        value={value}
                        onChange={onChange}
                        key={key + 1}
                    />
                </div>
            })
            }
        </ProfileForm>
    )
}

export default Profile