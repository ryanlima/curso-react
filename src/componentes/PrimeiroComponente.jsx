import React from 'react'


export default (props) =>
    <div>
        <h1>Valor props {props.valor}</h1>
        <h2>{ 1+ 1}</h2>
        <p>{true ? 'Sim' : 'Não'}</p>
    </div>
    

// export default function (){
//     return <h1>Primeiro Componente!</h1>
// }

// function primeiro(){
//     return <h1>Primeiro Componente</h1>
// }

// export default primeiro