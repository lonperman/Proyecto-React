import React, { Component } from 'react';
import ListaConferencistas from './ListaConferencistas';


class RegistrarConferencista extends Component {

    state = {}

    //Se Crean Los Refs
    documentoC = React.createRef();
    nombreC = React.createRef();
    emailC = React.createRef();
    telefonoC = React.createRef();
    sexoC = React.createRef();
    tipoC = React.createRef();


    CrearNuevoConferencista = (e) => {
        e.preventDefault();

        //Leer Post
        const conferencistaR = {
            documentoC : this.documentoC.current.value,
            nombreC : this.nombreC.current.value,
            emailC : this.emailC.current.value,
            telefonoC : this.telefonoC.current.value,
            sexoC : this.sexoC.current.value,
            tipoC : this.tipoC.current.value

        }

        //se envia el objeto hacia el padre para actualizar el state

        this.props.RegistrarConferencista(conferencistaR);

        //Reiniciar el formulario
        e.currentTarget.reset();

    }
    render(){
        return(
            <div  className="Conferencista row">
                 
            <h2>Registro de Conferencistas</h2>
                <form onSubmit={this.CrearNuevoConferencista} className="registro col s12">
                <div className="registro row">
                    <div className="input-field col s6">
                    <i className="material-icons prefix">subtitles</i>
                    <label htmlFor="icon_number" >N° Documento:</label>
                    <input type="number" id="icon_number" ref={this.documentoC}  className="validate"/>
                    </div>
                    <div className="input-field col s6">
                    <i className="material-icons prefix">account_circle</i>
                    <input id="icon_prefix" type="text" ref={this.nombreC} className="validate"/>
                    <label htmlFor="icon_prefix">Nombre Conferencista</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                    <i className="material-icons prefix">email</i>
                    <label htmlFor="icon_email">Email Conferencista:</label>
                    <input type="text" id="icon_email" ref={this.emailC}  className="validate"/>
                    </div>
                    <div className="input-field col s6">
                    <i className="material-icons prefix">phone</i>
                    <input id="icon_telephone" type="tel" ref={this.telefonoC} className="validate"/>
                    <label htmlFor="icon_telephone">Telefono Conferencista</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                    <select ref={this.sexoC}>
                        <option value="" disabled defaultValue>Elige tu Sexo</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                        <option value="Otro">Otro</option>
                    </select>
                    <i className="material-icons prefix">face</i>
                    </div>
                    <div className="input-field col s6">
                    <select ref={this.tipoC} >
                        <option value="" disabled defaultValue>Estado</option>
                        <option value="Participante">Activo</option>
                        <option value="Operador">Ocupado</option>
                    </select>
                    </div>
                </div>
                <div>
                    <input type="submit" className="btn btn-primary" value="Registrarse" />
                </div>
    
                </form>

                <div  className="ListaConferencistas row">

                <h2>Lista Conferencistas</h2>
                
                 <ListaConferencistas
                       conferencistaC = {this.props.conferencistaC}
                 />
                </div>
        
        </div>
    
        )
    }
}

export default RegistrarConferencista;