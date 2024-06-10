import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/img/almacenadoraIcon.png';
import { useUserDetails } from "../../shared/hooks/useUserDetails";
import "bulma/css/bulma.min.css";

const NavLogo = () => {
    return (
        <div className="navbar-item">
            <img src={logo} alt="Logo" />
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

export const Navbar = ({ toggleAddTask, toggleListTasks }) => {
    const { logout } = useUserDetails();

    const handleLogout = () => {
        logout();
    }

    useEffect(() => {
        const burger = document.querySelector('.navbar-burger');
        const menu = document.querySelector('.navbar-menu');

        burger.addEventListener('click', () => {
            burger.classList.toggle('is-active');
            menu.classList.toggle('is-active');
        });
    }, []);

    useEffect(() => {
        // Agregar estilos CSS dentro del componente
        const style = document.createElement('style');
        style.innerHTML = `
            .navbar {
                padding: 1rem;
            }

            .navbar-item img {
                max-height: 50px;
            }

            @media (max-width: 768px) {
                .navbar-menu {
                    display: none;
                }

                .navbar-menu.is-active {
                    display: block;
                }
            }
        `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        <nav className="navbar is-spaced is-transparent">
            <div className="navbar-brand">
                <NavLogo />
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasic">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasic" className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <NavLink text="Add Task" onclickHandler={toggleAddTask} />
                            <NavLink text="List Tasks" onclickHandler={toggleListTasks} />
                            <NavButton text="Logout" onclickHandler={handleLogout} />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
