import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Header extends Component {
    render() {
        return(
            <div> 
                <nav>
                    <div className=" #d32f2f red darken-2 hero">
                    <Link to={'/'} className="brand-logo">Universidad del Valle</Link>
                    </div>
                </nav>
            </div>             
            )
    }
}

export default Header;