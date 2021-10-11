import React from "react";
import Main from "../template/Main"

const home = props =>
<Main icon="home" title="Início" 
            subtitle="Segundo projeto do capítulo de React">
            <div className="display-4">Bem Vindo!</div>
            <hr />
            <p className="mb-0">Sistema para exemplificar construção de um 
                cadastro Desenvolvido em React!</p>    
</Main>

export default home