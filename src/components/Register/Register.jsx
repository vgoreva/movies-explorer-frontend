import { useState } from 'react';
import AuthPage from '../AuthPage/AuthPage';

function Register ({onRegister}) {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nameFormError, setNameFormError] = useState(" ");
    const [emailFormError, setEmailFormError] = useState(" ");
    const [passwordFormError, setPasswordFormError] = useState(" ");

    const inputs =
        [{
            type: "userName",
            name: "userName",
            id: "userName",
            placeholder: "Имя",
            required: true,
            value: userName  || "",
            onChange: evt => {
                setUserName(evt.target.value);
                setNameFormError(evt.target.validationMessage || " ")
            },
            errorMesage: nameFormError,
            key: 1
        },
        {
            type: "email",
            name: "email",
            id: "email",
            placeholder: "E-mail",
            required: true,
            value: email || "",
            onChange: evt => {
                setEmail(evt.target.value);
                setEmailFormError(evt.target.validationMessage || " ")
            },
            errorMesage: emailFormError,
            key: 2
        },
        {
            type: "password",
            name: "password",
            id: "password",
            placeholder: "Пароль",
            required: true,
            value: password || "",
            onChange: evt => {
                setPassword(evt.target.value);
                setPasswordFormError(evt.target.validationMessage || " ")
            },
            errorMesage: passwordFormError,
            key: 3
        }]


    function handleRegister(e) {
        e.preventDefault();

        onRegister ({
            setUserName: setUserName,
            email: email,
            password: password})
    }

    return (
        < AuthPage
            name="register"
            title="Добро пожаловать!"
            titleButton="Зарегистрироваться"
            onSubmit={handleRegister}
        >
            {inputs.map(({ type, name, id, placeholder, required, value, onChange, errorMesage, key }) => {
                return <div key={key}>
                    <div className="login__subtitle">{placeholder}</div>
                    <input
                        className={`login__input login__input_type_${name}`}
                        type={type}
                        id={id}
                        name={name}
                        placeholder={placeholder}
                        required={required}
                        value={value}
                        onChange={onChange}
                        key={key + 1}
                    />
                    <div className="login__error" key={key + 2}>{errorMesage || " "}</div>
                </div>
            })
            }
        </AuthPage >)
}

export default Register