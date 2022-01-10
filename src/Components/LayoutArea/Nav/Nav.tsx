import "./Nav.css";

function Nav(): JSX.Element {
    return (
        <nav className="Nav">
            <h2>קישורים מומלצים בנוגע לנעליים</h2>
			<a href="#">Home</a>
			<a href="#">About</a>
			<a href="#">Products</a>
			<a href="#">Support</a>
			<a href="#">Contact us</a>
        </nav>
    );
}

export default Nav;
