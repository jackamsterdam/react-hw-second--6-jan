import "./Header.css";
import AuthMenu from  '../../AuthArea/AuthMenu/AuthMenu'
import Logo from '../../HomeArea/Logo/Logo'

function Header(): JSX.Element {
    return (
        <div className="Header">
            <Logo />
            <AuthMenu/>
			<h1>馃殌讞谞讜转 讛谞注诇讬讬诐 讛诪讙谞讬讘讛 讘讬讜转专 讘讗专抓</h1>
        </div>
    );
}

export default Header;
