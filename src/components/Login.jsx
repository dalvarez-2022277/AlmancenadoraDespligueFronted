import { useState } from "react";
import { Logo } from "./Logo";
import { Input } from "./Input";
import {
    validateUsername,
    usernameValidationMessage,
    validatePassword,
    passwordValidationMessage
} from "../shared/validators";
import { useLogin } from "../shared/hooks";
import "bulma/css/bulma.min.css"
import logo from '../assets/img/almacenadoraIcon.png'

export const Login = ({ switchAuthHandler }) => {
    const { login, isLoading } = useLogin();

    const [formState, setFormState] = useState({
        username: {
            value: "",
            isValid: false,
            showError: false
        },
        password: {
            value: "",
            isValid: false,
            showError: false
        }
    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }));
    }

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false;
        switch (field) {
            case "username":
                isValid = validateUsername(value);
                break;
            case "password":
                isValid = validatePassword(value);
                break;
            default:
                break;
        }

        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }));
    };

    const handleLogin = (event) => {
        event.preventDefault();
        login(formState.username.value, formState.password.value);
    };

    const isSubmitButtonDisabled = isLoading || !formState.password.isValid || !formState.username.isValid;
    return (
        <div className="container flex-direction: column">
            <div className="columns is-centered">
                <div className="column is-one-third ">
                    <div className="card">
                        <div className="card-content has-text-centered">
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginBot: "1rem"
                            }}>
                                <Logo logo={logo}/>
                            </div>

                            <form>
                                <Input
                                    field="username"
                                    label="Username"
                                    value={formState.username.value}
                                    onChangeHandler={handleInputValueChange}
                                    type="text"
                                    showErrorMessage={formState.username.showError}
                                    validationMessage={usernameValidationMessage}
                                    onBlurHandler={handleInputValidationOnBlur}
                                    placeholder="Username"
                                />
                                <Input
                                    field="password"
                                    label="Password"
                                    value={formState.password.value}
                                    onChangeHandler={handleInputValueChange}
                                    type="password"
                                    showErrorMessage={formState.password.showError}
                                    validationMessage={passwordValidationMessage}
                                    onBlurHandler={handleInputValidationOnBlur}
                                    placeholder="Password"
                                />
                                <div>
                                    <button onClick={handleLogin} disabled={isSubmitButtonDisabled} className="button is-success">
                                        Login
                                    </button>
                                </div>
                                <div><br /></div>
                            </form>
                            <span onClick={switchAuthHandler} className="subtitle is-6 cursor-pointer" style={{ cursor: 'pointer' }}>
                                ¿Do you don't have an account? Register here!
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div >


    );

}
