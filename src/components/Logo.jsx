
import "bulma/css/bulma.min.css"
export const Logo = ({logo}) => {
    return (
        <figure className="image is-128x128">
            <img className="is-rounded" src={logo} />
        </figure>
    )
}