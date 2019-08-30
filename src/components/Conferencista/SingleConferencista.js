import React, { Component } from 'react'


class SingleConferencista extends Component {
      
   mostrarConf = (props) => {
        if(!props.conf) return null;
         const {name,body,id} = this.props.conf;

         return(
             <React.Fragment>
                 <h1>{body}</h1>
                 <p>Autor: {name}</p>
                 <p>ID : {id}</p>
             </React.Fragment>
         )
   }
    
    render(){
       
        return(
           <div className="SingleConf ">
            {this.mostrarConf(this.props)}
           </div>
        )
    }
}

export default SingleConferencista;