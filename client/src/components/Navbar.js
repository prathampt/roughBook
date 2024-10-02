import { Link } from "react-router-dom";
import '../styles/Navbar.css';
import Search from "./Search";
import { useState, useEffect } from 'react';

const Navbar = ({ error, isPending, data }) => {
    const [query, setQuery] = useState([]) 

    useEffect(() => {
        if (data) {
            setQuery(data)
        }
    }, [data])
    
    return (
        <nav className="navbar">
            <h1>
            <Link to="/"><span className="roughbook">Rough Book</span></Link> <a href="https://github.com/prathampt"><span className="pratham">by Pratham</span></a>
            </h1>
            <div className="links">
                {/* <Link to="/write">Write</Link> */}
                {!error && !isPending && <Search data={query} />}
            </div>
        </nav>
    );
}
 
export default Navbar;