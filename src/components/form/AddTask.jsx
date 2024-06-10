import { useState } from "react";
import { Input } from "../../components/form/Input";
import {
    validateNameTask,
    validateNameTaskMessage,
    validateState,
    validateStateMessage,
    validateDate,
    validateDateMessage,
    validateName,
    validateNameMessage,
    validateDescription,
    validateDescriptionMessage
} from "../../shared/validator";
import { useAddTask } from '../../shared/hooks/useAddTask'
import "bulma/css/bulma.min.css";

const inputs = [
    {
        field: 'nameTask',
        label: "Name Task",
        validationMessage: validateNameTaskMessage,
        type: 'text'
    }, {
        field: 'dateEnd',
        label: "Date End",
        validationMessage: validateDateMessage,
        type: 'date'
    }, {
        field: 'nameUser',
        label: "Name User",
        validationMessage: validateNameMessage,
        type: 'text'
    }, {
        field: 'description',
        label: "Description",
        validationMessage: validateDescriptionMessage,
        type: 'textarea'
    },
]

export const AddTask = () => {
    const { addTask, isLoading } = useAddTask();
    const [formState, setFormState] = useState({
        nameTask: {
            value: '',
            isValid: false,
            showError: false
        },
        dateEnd: {
            value: '',
            isValid: false,
            showError: false
        },
        nameUser: {
            value: '',
            isValid: false,
            showError: false
        },
        description: {
            value: '',
            isValid: false,
            showError: false
        },
    });

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }))
    }

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false;
        switch (field) {
            case 'nameTask':
                isValid = validateNameTask(value)
                break;
            case 'dateEnd':
                isValid = validateDate(value)
                break;
            case 'nameUser':
                isValid = validateName(value)
                break;
            case 'description':
                isValid = validateDescription(value)
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
        }))

        console.log("isLoading ", isLoading, "nameTask ", !formState.nameTask.isValid
            , "dateEnd ", !formState.dateEnd.isValid,
            "description ", !formState.description.isValid);
    }

    const handleAddTask = (event) => {
        event.preventDefault();
        addTask(formState.nameTask.value,
            formState.description.value,
            formState.dateEnd.value
        );
        setFormState({ nameTask: { value: '', isValid: false, showError: false }, dateEnd: { value: '', isValid: false, showError: false }, nameUser: { value: '', isValid: false, showError: false }, description: { value: '', isValid: false, showError: false } });
    }

    const isSubmitButtonDisabled = isLoading || !formState.nameTask.isValid
        || !formState.dateEnd.isValid ||
        !formState.description.isValid;



    return (
        <div className="columns is-centered">
            <div className="column is-half">
                <div className="card">
                    <div className="card-content">
                        <div className="content">
                            <h1 className="title columns is-centered">ADD TASK</h1>
                            <form className="">
                                <div className="field">
                                    <Input
                                        field={'nameTask'}
                                        placeholder={'Name Task'}
                                        label={'Name Task'}
                                        value={formState.nameTask.value}
                                        onChangeHandler={handleInputValueChange}
                                        type={'text'}
                                        onBlurHandler={handleInputValidationOnBlur}
                                        showErrorMessage={formState.nameTask.showError}
                                        validationMessage={validateNameTaskMessage}
                                    />
                                </div>

                                <div className="field">
                                    <Input
                                        field={'description'}
                                        placeholder={'Description'}
                                        label={'Description'}
                                        value={formState.description.value}
                                        onChangeHandler={handleInputValueChange}
                                        type={'textarea'}
                                        onBlurHandler={handleInputValidationOnBlur}
                                        showErrorMessage={formState.description.showError}
                                        validationMessage={validateDescriptionMessage}
                                    />
                                </div>


                                <div className="field">
                                    <Input
                                        field={'dateEnd'}
                                        label={'Date End'}
                                        value={formState.dateEnd.value}
                                        onChangeHandler={handleInputValueChange}
                                        type={'date'}
                                        onBlurHandler={handleInputValidationOnBlur}
                                        showErrorMessage={formState.dateEnd.showError}
                                        validationMessage={validateDateMessage}
                                    />
                                </div>
                                <div className="control">
                                    <button className="button is-success is-fullwidth " onClick={handleAddTask} disabled={isSubmitButtonDisabled}>AGREGAR</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
