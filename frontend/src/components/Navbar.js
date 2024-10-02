import { Link } from "react-router-dom";
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">

            <h1>
            <Link to="/"><span className="roughbook">Rough Book</span></Link> <a href="https://github.com/prathampt"><span className="pratham">by Pratham</span></a>
            </h1>
            {/* <div className="links">
                <Link to="/write">Write</Link>
            </div> */}
        </nav>
    );
}
 
export default Navbar;