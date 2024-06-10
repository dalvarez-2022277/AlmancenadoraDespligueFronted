import "bulma/css/bulma.min.css";

export const Input = ({
    field,
    label,
    placeholder,
    value,
    onChangeHandler,
    type,
    showErrorMessage,
    validationMessage,
    onBlurHandler,
    textarea
}) => {
    const handleValueChange = (event) => {
        onChangeHandler(event.target.value, field)
    }

    const handleInputBlur = (event) => {
        onBlurHandler(event.target.value, field)
    }
    return (
        <div className="py-1">
            <div className="label">
                {label}
            </div>
            <div>
                {textarea ? (
                    <textarea
                        className={"textarea"}
                        placeholder={placeholder}
                        type={textarea}
                        value={value}
                        onChange={handleValueChange}
                        onBlur={handleInputBlur}
                        rows={5}
                    />
                ) : (
                    <input
                        className={"input"}
                        placeholder={placeholder}
                        type={type}
                        value={value}
                        onChange={handleValueChange}
                        onBlur={handleInputBlur}
                    />
                )
                }
                {showErrorMessage && (
                    <p className="help is-danger">{validationMessage}</p>
                )}
            </div>
        </div>
    )
}