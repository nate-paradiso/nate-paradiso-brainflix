import "./Navbar.scss";
import logo from "../../../assets/images/logo/BrainFlix-logo.svg"


function NavBar () {

    return(
        <header className="header">
            <div className="header__logo">
                <img src={logo} alt="logo"></img>
            </div>
            <div className="header__search-container">
                <form>
                    <input type="text" placeholder="Search" name="search"></input>
                </form>
                <div class="header__img-container">
                    <div class="header__img-container--image">
                    </div>
                </div>
            </div>
            <button className="header__button">UPLOAD</button>
            <div class="header__img-container-tablet">
                <div class="header__img-container--image-tablet">
                </div>
            </div>
        </header>
    );
}
export default NavBar