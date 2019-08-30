import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Conferencista extends Component {
    
    

    render(){
        const {id,name,email} = this.props.info;
         return( 
             <tr>
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>{email}</td>
                 <td>
                     <Link to={`/conferencistaver/${id}`} className="btn btn-primary">Ver</Link>
                     <button type="button" className="btn btn-danger">Borrar</button>
                 </td>
             </tr>
         )
    }
}

export default Conferencista;
