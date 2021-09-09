import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {
   
    return (
        <nav className="nav">
            <ul >
                <Link  to="/" >
                    <li><h2>Home</h2></li>
                    <p> </p>
                </Link>
                <Link  to="/movies">
               <li><h2>ListMovies</h2></li>  
                </Link>
            </ul>
        </nav>
    );
}

export default Header
