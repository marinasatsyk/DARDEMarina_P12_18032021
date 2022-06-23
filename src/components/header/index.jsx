import logo from '../../assets/logo.svg';

/**
 * Header element
 * @returns {React.ReactElement} Header of page
 */
function Header() {
    return (
        <header>
            <div className="wrapHeader">
                <div className="wrap_img">
                    <img src={logo} alt="" className="logo" />
                </div>
                <nav className="navHeader">
                    <ul className="menu_header">
                        <li className="nav_item">Accueil</li>
                        <li className="nav_item">Profil</li>
                        <li className="nav_item">Réglage</li>
                        <li className="nav_item">Communauté</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
