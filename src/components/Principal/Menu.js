import React from 'react';
import {NavLink} from 'react-router-dom';
import jquery from './jquery';



const Menu = () => {

  
    return(
      
      <aside className="nav-wrapper contenedor-menu">

      <ul className="menu">
      <a  className=" btn-menu menu ">Menu <i className="icono material-icons">menu</i></a>
        <li><NavLink to={'/'} className="menu"><i className="material-icons icono izquierda ">home</i> Inicio</NavLink></li>
        <li><a href="#" className="menu"><i className="material-icons icono izquierda ">event</i>Eventos</a></li>           
        <li><NavLink to={'/Conferencista'} className="menu" activeClassName="activo">Conferencista</NavLink></li>    
        <li><NavLink to={'/'} className="menu"><i className="material-icons icono izquierda ">share</i> Redes Sociales <i className="icono derecha material-icons">expand_more</i></NavLink>
          <ul>
              <li><a href="#" className="menu">item</a></li>
              <li><a href="#" className="menu">item</a></li>
              <li><a href="#" className="menu">item</a></li>
           </ul>   
        </li>          
        <li><NavLink to={'/Conferencista'} className="menu" activeClassName="activo"><i className="material-icons icono izquierda ">email</i> Contactanos</NavLink></li>
      </ul>
     </aside>
    )
  
}

export default Menu;
