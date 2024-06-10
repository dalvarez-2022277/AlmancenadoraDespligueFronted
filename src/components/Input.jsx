import "bulma/css/bulma.min.css"
import homeIcon from "../assets/img/homeIcon.png"
export const Input = ({
    field,
    label,
    value,
    onChangeHandler,
    type,
    showErrorMessage,
    validationMessage,
    onBlurHandler,
    textarea,
    placeholder,
    span
}) => {
    const handleValueChange = (event) => {
        onChangeHandler(event.target.value, field)
    }

    const handleInputBlur = (event) => {
        onBlurHandler(event.target.value, field)
    }

    return (
        <div>
            <div className="card-content">
                <div className="title is-3  ">
                    <span>{label}</span>
                </div>
                {textarea ? (
                    <textarea
                        className="textarea"
                        value={value}
                        onChange={handleValueChange}
                        onBlur={handleInputBlur}
                        rows={5}
                        style={{ maxWidth: "400px" }}
                    />
                ) : (
                    <input
                        className="input"
                        type={type}
                        value={value}
                        onChange={handleValueChange}
                        onBlur={handleInputBlur}
                        placeholder={placeholder || ""}
                        span={span}
                    />
                )}
                {showErrorMessage && (
                    <p className="help is-danger">{validationMessage}</p>
                )}
            </div>
        </div>
    )
}