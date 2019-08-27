import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Header extends Component {
    render() {
        return(
            <div> 
               <Link to={'/'} > 
                <nav>
                    <div className="nav-wrapper #d32f2f red darken-2 hero">
                    <a href="#" className="brand-logo">Universidad del Valle</a>
                
                    </div>
                </nav>
                </Link>
            </div>             
            )
    }
}

export default Header;