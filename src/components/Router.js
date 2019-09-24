import React, { Component } from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import axios from 'axios';
import Header from './Principal/Header';
import Banner from './Principal/Banner';
import Menu from './Principal/Menu';
import RegistrarConferencista from './Conferencista/RegistrarConferencista';
import SingleConferencista from './Conferencista/SingleConferencista';
import Formulario from './Usuarios/Formulario';



class Router extends Component {
    
    state = {
        post:[],
        conferencistaC: []
       
    }

    RegistrarConferencista = (conferencistaR) => {
       axios.post(`http://localhost:4552/api/conferencistas/crear`,conferencistaR)
       .then(res =>{

       })

       console.log(conferencistaR);
    }

    componentDidMount() {
        this.ObtenerConferencista();
    }
    
    ObtenerConferencista = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/1/comments`)
        .then(res => {
           this.setState({
              conferencistaC: res.data
           })
        })
    }
   
   
    registrarPost = (post) => {
       axios.post(`http://localhost:4552/api/usuarios/crear`,post)
       .then(res =>{
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
                        <Route  path="/Conferencista" render={ () => {
                            return(
                                <RegistrarConferencista
                                RegistrarConferencista = {this.RegistrarConferencista}
                                conferencistaC = {this.state.conferencistaC}
                                />
                            )
                        } }
                        
                        />
                         <Route exact  path="/conferencistaver/:conferencistaId" render={ (props) => {
                           let idconferencista = props.location.pathname.replace('/conferencistaver/','');
                           
                           const conferencistaC = this.state.conferencistaC;

                           let filtro;
                           filtro = conferencistaC.filter(conferencistas => (
                               conferencistas.id == idconferencista
                           ))
                              return(
                                  <SingleConferencista
                                      conf = {filtro[0]}
                                  />
                              )
                        }}
                        />
                     
                        <Route exact  path="/Formulario" render={ () => {
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