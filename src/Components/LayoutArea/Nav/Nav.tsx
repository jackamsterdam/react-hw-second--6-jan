import { NavLink } from "react-router-dom";
// import "./Nav.css";
//!  pay attention module not modules 
import css from './Nav.module.css'

function Nav(): JSX.Element {
    return (
        // <nav className="Nav">
        <nav className={css.CoolText}>
            <h2>תפריט</h2>
		
            <NavLink to='/home'>דף הבית</NavLink>
            <NavLink to='/products'>מוצרים</NavLink>
            <NavLink to='/success-stories'>סיפורי הצלחה</NavLink>
            <NavLink to='/about'>מי אנחנו</NavLink>
            <NavLink to='/employees'>העובדים שלנו</NavLink>
            <NavLink to="/shoeOrder">הזמנת נעליים</NavLink>
            
        </nav>
    );
}

export default Nav;
