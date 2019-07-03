import React from 'react'
import ReactDOM from 'react-dom'
//import PrimeiroComponente from './componentes/PrimeiroComponente'
// import CompA, {CompB as B} from './componentes/DoisComponentes'
// import MultiElementos from './componentes/MultiElementos'
// import FamiliaSilva from './componentes/FamiliaSilva'
//import Familia from './componentes/Familia'
//import Membro from './componentes/Membro'
//import ComponentComFuncao from './componentes/ComponentComFuncao';
// import Pai from './componentes/Pai'
// import ComponenteClasse from './componentes/ComponentClasse'
// import Contador from './componentes/Contador'
import Hook from './componentes/Hook'


const elemento = document.getElementById('root')
ReactDOM.render(
    <div>

        <Hook/>

        {/* <Contador valorInicial={100}/> */}
        {/* <ComponenteClasse valor={"Sou um component de classe!"}/> */}
        {/* <Pai/> */}
        {/* <ComponentComFuncao/>    */}
        {/* <Familia sobrenome="Rocha" numero={123}>
            <Membro nome="Jaynara" />
            <Membro nome="Jayna" />
        </Familia> */}
        {/* <FamiliaSilva /> */}
        {/* <MultiElementos/> */}
        {/* <CompA valor="olá eu sou A!"/> */}
        {/* <B valor="B na área!"/> */}
        {/* <PrimeiroComponente valor="Bom dia!" />  */}
    </div>
, elemento)



//const jsx = <h1>Olá React!</h1>
//ReactDOM.render(jsx, elemento)