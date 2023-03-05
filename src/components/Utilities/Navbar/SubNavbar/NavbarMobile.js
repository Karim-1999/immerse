// import { handleExit, handleOpenMenu } from "./animation.js"

export function NavbarMobile(){
    return (
        <nav className="nav1">
        <div className="nav1__checkbox">
            <div className="nav1__checkbox--change">
                <a href="#"><img src="https://assets.website-files.com/62b46e994f1dca9e9be49474/62b46e994f1dcab906e494ef_immerse-wordmark.svg" className="img1" /></a>
            </div>
            <div id="logo" /* onClick={handleOpenMenu} */>MENU</div>
            <div id="exitButton" /* onClick={handleExit} */ className="nascondi">EXIT</div>
        </div>
        <div className="nav1__checkbox__hr"></div>
        <div id="nav1__navList" className="nascondi">
            <ul className="menu">
                <li><a href="#" className="menu-element hidden">Experience</a></li>
                <li><a href="#" className="menu-element hidden">Why Immerse?</a></li>
                <li><a href="#" className="menu-element hidden">Blog</a></li>
                <li><a href="#" className="menu-element hidden">Our Story</a></li>
                <li><a href="#" className="menu-element hidden">Sign In</a></li>
            </ul>
            <div className="trial-btn">
                <a href="#" className="button-trial card-btn">start your trial</a>
            </div>
        </div>
    </nav>
    )
}