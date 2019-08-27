import React, { Component } from 'react';

class RegistrarConferencista extends Component {
    render(){
        return(
            <div  className="Conferencista row">
                 
            <h2>Registro de Usuarios</h2>
                <form onSubmit={this.registrar_usuario} className="registro col s12">
                <div className="registro row">
                    <div className="input-field col s6">
                    <i className="material-icons prefix">subtitles</i>
                    <label htmlFor="icon_number" className="col-sm-4 col-lg-2 col-form-label" >N° Documento:</label>
                    <input type="number" id="icon_number" ref={this.documentoRef}  className="validate"/>
                    </div>
                    <div className="input-field col s6">
                    <i className="material-icons prefix">account_circle</i>
                    <input id="icon_prefix" type="text" ref={this.nombreRef} className="validate"/>
                    <label htmlFor="icon_prefix">Nombre</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                    <i className="material-icons prefix">email</i>
                    <label htmlFor="icon_email" >Email:</label>
                    <input type="text" id="icon_email" ref={this.emailRef}  className="validate"/>
                    </div>
                    <div className="input-field col s6">
                    <i className="material-icons prefix">phone</i>
                    <input id="icon_telephone" type="tel" ref={this.telefonoRef} className="validate"/>
                    <label htmlFor="icon_telephone">Telefono</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s6">
                    <select ref={this.sexoRef}>
                        <option value="" disabled defaultValue>Elige tu Sexo</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                        <option value="Otro">Otro</option>
                    </select>
                    <i className="material-icons prefix">face</i>
                    </div>
                    <div className="input-field col s6">
                    <select ref={this.tipoRef} >
                        <option value="" disabled defaultValue>Tipo de Usuario</option>
                        <option value="Participante">Participante</option>
                        <option value="Operador">Operador</option>
                    </select>
                    </div>
                    <div className="input-field col s6">
                    <i className="material-icons prefix">vpn_key</i>
                    <label htmlFor="icon_password" >Contraseña</label>
                    <input type="password" id="icon_password" ref={this.contraseñaRef} className="validate"/>
                    </div>
                </div>
                <div>
                    <input type="submit" className="btn btn-primary" value="Registrarse" />
                </div>
    
                </form>
        
        </div>
    
        )
    }
}

export default RegistrarConferencista;