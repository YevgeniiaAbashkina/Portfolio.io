import { NavLink } from "react-router-dom";
import "./navigation.css";

export const Navigation = () => {
    return (
        <>
            <nav className="navigation">
                <ul>
                    <li><NavLink to="/" className="navlink">About me</NavLink></li>
                    <li><NavLink to="/projects" className="navlink">Projects</NavLink></li>
                    <li><NavLink to="/contacts" className="navlink">Contacts</NavLink></li>
                    <li><NavLink to="/cv" className="navlink">CV</NavLink></li>
                </ul>    
            </nav>
        </>
    )
}
