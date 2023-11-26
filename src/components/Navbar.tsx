import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const navigate = useNavigate();

    const navigateToHomePage = () => {
        navigate("/");
    };

    const navigateToViewUserPage = () => {
        navigate("/view");
    };

    const navigateToAddUserPage = () => {
        navigate("/adduser");
    };

    return (
        <div className="navbar-container">
            <img src="logo.png" alt="Logo" className="navbar-logo" />
            <div className="navbar-buttons">
                <button type="button" className="navbar-button" onClick={navigateToHomePage}>
                    Home
                </button>
                <button type="button" className="navbar-button" onClick={navigateToViewUserPage}>
                    View Users
                </button>
                <button type="button" className="navbar-button" onClick={navigateToAddUserPage}>
                    Add User
                </button>
            </div>
        </div>
    );
}

export default Navbar;
