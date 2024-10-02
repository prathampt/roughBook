import { Link } from "react-router-dom";
import '../styles/Navbar.css';
import Search from "./Search";
import { useState, useEffect } from 'react';

const Navbar = ({ error, isPending, data }) => {
    // const { error, isPending, data } = useFetch('http://localhost:8000/pages')
    const [query, setQuery] = useState([]) 

    useEffect(() => {
        if (data) {
            setQuery(data.map((page) => {
                return {
                    "idea": page['idea'],
                    "title": page['title'],
                    "id": page['id']
                };
            }))
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