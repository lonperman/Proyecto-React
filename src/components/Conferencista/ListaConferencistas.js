import React, { Component } from 'react';
import Conferencista from './Conferencista';


class ListaConferencistas extends Component {
     
    MostrarPost = () => {
        const conferencistaC = this.props.conferencistaC;

        if(conferencistaC === 0) return null;

        return(
            <React.Fragment>
                {Object.keys(conferencistaC).map(conferencista => (
                    <Conferencista 
                         key={conferencista}
                         info={this.props.conferencistaC[conferencista]}
                    />
                ))}
            </React.Fragment>
        )

    }

    render() {
 

        return (
           <table className="striped">
               <thead>
                   <tr>
                       <th scope="col">ID</th>
                       <th scope="col">Nombre</th>
                       <th scope="col">Email</th>
                       <th scope="col">Acciones</th>
                   </tr>
               </thead>
               <tbody>
                   {this.MostrarPost()}
               </tbody>
           </table>
        )
    }
}
export default ListaConferencistas;