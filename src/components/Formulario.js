import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Swal from 'sweetalert2';
import {Link} from 'react-router-dom';





class Formulario extends Component {

    state = {
        error: '',
        resultado: {}
      }

    //Crear los refs
    documentoRef = React.createRef();
    nombreRef = React.createRef();
    emailRef = React.createRef();
    telefonoRef = React.createRef();
    sexoRef = React.createRef();
    tipoRef = React.createRef();
    contraseñaRef = React.createRef();


    registrar_usuario = (e) => {
        e.preventDefault();

        //Leer Post
        const post = {
            id_usuario : this.documentoRef.current.value,
            nom_usuario : this.nombreRef.current.value,
            correo: this.emailRef.current.value,
            telefono: this.telefonoRef.current.value,
            pass: this.contraseñaRef.current.value,
            sexo: this.sexoRef.current.value,
            tipo: this.tipoRef.current.value
        }

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: 'btn btn-success',
              cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
          })

          if(post.id_usuario === '' || post.nom_usuario === '' || post.correo === '' || post.telefono === '' ||
            post.pass === '' || post.sexo === '' || post.tipo ===''){
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Todos Los Campos Son Obligatorios!',
               
              })
          }else {
          
          swalWithBootstrapButtons.fire({
            title: 'Te Quieres Registrar?',
            type: 'warning',
            showCancelButton: true,
            cancelButtonText: 'No, Cancelar',
            confirmButtonText: 'Si, Registrame',
    
          }).then((result) => {
            if (result.value) {
              //enviar por props
              this.props.registrarPost(post)
              swalWithBootstrapButtons.fire(
                'Registrado',
                'Registro Exitoso.',
                'success'
              )
              
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelado',
                '',
                'error'
              )
            }
          })
        }
      

           
    
        }


     
       
    
        

    
 
    render() {

   
        return(
                <div  className="formulario row">
                 
                    <h2>Registro de Usuarios</h2>
                        <form onSubmit={this.registrar_usuario} className="registro col s12">
                        <div className="registro row">
                            <div className="input-field col s6">
                            <i className="material-icons prefix">subtitles</i>
                            <label htmlFor="icon_number" >N° Documento:</label>
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
export default Formulario;