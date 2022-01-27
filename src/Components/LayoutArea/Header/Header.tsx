import "./Header.css";
import AuthMenu from  '../../AuthArea/AuthMenu/AuthMenu'
import Logo from '../../HomeArea/Logo/Logo'

function Header(): JSX.Element {
    return (
        <div className="Header">
            <Logo />
            <AuthMenu/>
			<h1>חנות הנעליים המגניבה ביותר בארץ</h1>
        </div>
    );
}

export default Header;
