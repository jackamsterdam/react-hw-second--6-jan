import "./Layout.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
// import Home from "../../HomeArea/Home/Home"
import Routing from '../Routing/Routing'

function Layout(): JSX.Element {
    return (
        <div className="Layout">
			<header>
               <Header/>
            </header> 
            <nav>
                <Nav />
            </nav>
            <main>
                {/* <Home /> */}
                <Routing/>
            </main>
            <footer>
             <Footer />
            </footer>
        </div>
    );
}


export default Layout;
