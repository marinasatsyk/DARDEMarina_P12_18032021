import logo from '../../assets/logo.svg';

function Header() {
    return (
        <header>
            <div className="header">
                <img src={logo} alt="" className="logo" />
                <nav className="navHeader">
                    <ul>
                        <li>Accueil</li>
                        <li>Profil</li>
                        <li>Réglage</li>
                        <li>Communauté</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
