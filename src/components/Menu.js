import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';



class Menu extends Component {

 componentDidMount(){
  $(document).ready(function() {
    $('.menu li:has(ul)').click(function(e){
        e.preventDefault();

        if($(this).hasClass('activado')){
           $(this).removeClass('activado');
           $(this).children('ul').slideUp();
        } else {
          $('.menu li ul').slideUp();
          $('.menu li').removeClass('activado');
          $(this).addClass('activado');
          $(this).children('ul').slideDown();
        }
    });
    

  });

 }
  render() {
    return(
      
      <div className="contenedor-menu">

      <ul className="menu">
      <a  className=" btn-menu menu ">Menu <i className="icono material-icons">menu</i></a>
        <li><Link to={'/'} className="menu"><i className="material-icons icono izquierda ">home</i> Inicio</Link></li>
        <li><a href="#" className="menu"><i className="material-icons icono izquierda ">event</i>Eventos<i className="icono derecha material-icons">expand_more</i></a>
            <ul>
              <li><Link to={'/Conferencista'} className="menu">Conferencista</Link></li>
              <li><Link to={'/Formulario'} className="menu">item</Link></li>
              <li><a href="#" className="menu">item</a></li>
            </ul>
        </li>
        <li><Link to={'/'} className="menu"><i className="material-icons icono izquierda ">share</i> Redes Sociales <i className="icono derecha material-icons">expand_more</i></Link>
          <ul>
              <li><a href="#" className="menu">item</a></li>
              <li><a href="#" className="menu">item</a></li>
              <li><a href="#" className="menu">item</a></li>
          </ul>       
        </li>
        <li><Link to={''} className="menu"><i className="material-icons icono izquierda ">email</i> Contactanos</Link></li>
      </ul>
     </div>
    )
  }
}

export default Menu;
