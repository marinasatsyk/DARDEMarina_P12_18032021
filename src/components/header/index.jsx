import logo from '../../assets/logo.svg';

function Header() {
    return (
        <div className="header">
            <img src={logo} alt="" className="logo" />
        </div>
    );
}

export default Header;
