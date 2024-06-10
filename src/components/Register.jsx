import { useState } from "react";
import { Logo } from "./Logo";
import { Input } from "./form/Input";
import {
    validateUsername,
    usernameValidationMessage,
    validatePassword,
    passwordValidationMessage,
    validateFirstName,
    validateFirstNameMessage,
    validateLastName,
    validateLastNameMessage,
    validateConfirmPassword,
    validateConfirmPasswordMessage
} from "../shared/validators";
import { useRegister } from "../shared/hooks";
import "bulma/css/bulma.min.css"
import logoUser from '../assets/img/user.png'

export const Register = ({ switchAuthHandler }) => {
    const { register, isLoading } = useRegister();

    const [formState, setFormState] = useState({
        firstName: {
            value: "",
            isValid: false,
            showError: false
        },
        lastName: {
            value: "",
            isValid: false,
            showError: false
        },
        username: {
            value: "",
            isValid: false,
            showError: false
        },
        password: {
            value: "",
            isValid: false,
            showError: false
        },
        confirmPassword: {
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
            case "firstName":
                isValid = validateFirstName(value);
                break;
            case "lastName":
                isValid = validateLastName(value);
                break;
            case "username":
                isValid = validateUsername(value);
                break;
            case "password":
                isValid = validatePassword(value);
                break;
            case "confirmPassword":
                isValid = validateConfirmPassword(value, formState.password.value);
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

    const handleRegister = (event) => {
        event.preventDefault();
        register(formState.firstName.value, formState.lastName.value, formState.username.value, formState.password.value)
    };

    const isSubmitButtonDisabled = isLoading || !formState.firstName.isValid || !formState.lastName.isValid
        || !formState.password.isValid || !formState.username.isValid || !formState.confirmPassword.isValid;
    return (
        <div className="container flex-direction: column">
            <div className="columns is-centered">
                <div className="column is-one-third ">
                    <div className="card">
                        <div className="card-content ">
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginBot: "1rem"
                            }}>
                                <Logo logo={logoUser} />
                            </div>

                            <form>
                                <Input
                                    field="firstName"
                                    label="First Name"
                                    value={formState.firstName.value}
                                    onChangeHandler={handleInputValueChange}
                                    type="text"
                                    showErrorMessage={formState.firstName.showError}
                                    validationMessage={validateFirstNameMessage}
                                    onBlurHandler={handleInputValidationOnBlur}
                                    placeholder="First Name"
                                />
                                <Input
                                    field="lastName"
                                    label="Last Name"
                                    value={formState.lastName.value}
                                    onChangeHandler={handleInputValueChange}
                                    type="text"
                                    showErrorMessage={formState.lastName.showError}
                                    validationMessage={validateLastNameMessage}
                                    onBlurHandler={handleInputValidationOnBlur}
                                    placeholder="Last Name"
                                />
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
                                <Input
                                    field="confirmPassword"
                                    label="Confirm Password"
                                    value={formState.confirmPassword.value}
                                    onChangeHandler={handleInputValueChange}
                                    type="password"
                                    showErrorMessage={formState.confirmPassword.showError}
                                    validationMessage={validateConfirmPasswordMessage}
                                    onBlurHandler={handleInputValidationOnBlur}
                                    placeholder="Confirm Password"
                                />
                                <div className="has-text-centered">
                            <br />
                                    <div onClick={switchAuthHandler}>
                                        <button onClick={handleRegister} disabled={isSubmitButtonDisabled} className="button is-primary is-fullwidth">
                                            Register
                                        </button>
                                    </div>
                                </div>
                                <div><br /></div>
                            </form>
                            <div className="has-text-centered">
                                <span onClick={switchAuthHandler} className="subtitle is-6 cursor-pointer" style={{ cursor: 'pointer' }}>
                                    ¿Do you have an account? Login here!
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >


    );

}
