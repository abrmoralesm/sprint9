import React from 'react';
import Listado from './Listado';

const ListadoNombres = (props, children)=>{
    return(
        <div>
            <h1>{props.children}</h1>
            <h1>{props.title}</h1>
            <ul>
                {Listado.map((persona,index)=>(
                    <li key={index}>
                        {persona.nombre} - {persona.edad}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ListadoNombres;