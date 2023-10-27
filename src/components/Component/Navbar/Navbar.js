import "./Navbar.scss";
import logo from "../../../assets/images/logo/BrainFlix-logo.svg"
import { Link } from "react-router-dom";


function NavBar () {

    return(
        <nav className="header">
            <div className="header__logo">
                <Link to={`/`}><img src={logo} alt="logo"></img></Link>
            </div>
            <div className="header__search-container">
                <form>
                    <input className="input-nav" type="text" placeholder="Search" name="search"></input>
                </form>
                <div className="header__img-container">
                    <div className="header__img-container--image">
                    </div>
                </div>
            </div>
            <Link className="header__button" to={`/upload`}>UPLOAD</Link>
            <div className="header__img-container-tablet">
                <div className="header__img-container--image-tablet">
                </div>
            </div>
        </nav>
    );
}
export { NavBar };