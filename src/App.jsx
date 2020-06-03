import React from 'react'

import Arrow from './components/componenteArrow'
import Parametro from './components/componanteParametro'
import Filhos from './components/componeteComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/componenteRepeticao'

import './App.css'


export default props =>
    <div className="App">
        <Card titulo="Componente Arrow">
            <Arrow></Arrow>
        </Card>

        <Card titulo="Componante Parametro">
            <Parametro titulo="Titulo como parametro" paragrafo="Paragrafo como parametro" />
        </Card>

        <Card titulo="Componante Filhos">
            <Filhos>
                <ul>
                    <li>João</li>
                    <li>Carlos</li>
                    <li>Maria</li>

                </ul>
            </Filhos>
        </Card>
        <Card titulo="Repetição">
            <Repeticao></Repeticao>
        </Card>
        
    </div>