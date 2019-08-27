import React, { Component } from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert2';
import Header from './Header';
import Banner from './Banner';
import Menu from './Menu';
import RegistrarConferencista from './RegistrarConferencista';
import Formulario from './Formulario';


class Router extends Component {
    
    state = {
        post:{}
       
    }
   
   
    registrarPost = (post) => {
       axios.post(`http://localhost:4552/api/usuarios/crear`,{
        id_usuario: post.id_usuario,
        nom_usuario: post.nom_usuario,
        correo: post.correo,
        telefono: post.telefono,
        pass: post.pass,
        sexo: post.sexo,
        tipo: post.tipo
       }).then(res =>{

       })

      
    }
    


    render() {


    
        return(
            <BrowserRouter>
                <div className="contenedor" >
                    <Header/>
                    <Banner/>
                    <Menu/>
                    <Switch>
                        <Route  path="/Conferencista" component={RegistrarConferencista}/>
                        <Route  path="/Formulario" render={ () => {
                            return(
                                <Formulario
                                registrarPost= {this.registrarPost}
                                />
                            )
                        }}
                        />
                       
                   </Switch>       
                </div>
            </BrowserRouter>
        );
    }
}

export default Router;
