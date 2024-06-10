import { useNavigate } from "react-router-dom";
import logo from '../../assets/img/almacenadoraIcon.png'
import { useUserDetails } from "../../shared/hooks/useUserDetails";
import "bulma/css/bulma.min.css";

const NavLogo = () => {
    return (
        <div className="nav-item">
            <img
                src={logo}
            />
        </div>

    )
}

const NavButton = ({ text, onclickHandler }) => {
    return (
        <button className="button is-danger" onClick={onclickHandler}>{text}</button>
    );
};
const NavLink = ({ text, onclickHandler }) => {
    return (
        <button className="button" onClick={onclickHandler}>{text}</button>
    );
};

export const Navbar = ({toggleAddTask,toggleListTasks}) => {
    const { logout } = useUserDetails();


    const handleLgout = () => {
        logout()
    }
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <NavLogo />
            </div>
            <div className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <NavLink text="Add Task" onclickHandler={toggleAddTask} />
                            <NavLink text="List Tasks" onclickHandler={toggleListTasks} />
                            <NavButton text="Logout" onclickHandler={handleLgout} />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}