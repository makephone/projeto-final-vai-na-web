{{/*Fazendo importes Necessarios*/}}
import React from "react";
import Slider from '../componentes/slider';
import SectionTecnologias from '../componentes/sectionTecnologias';
import SectionVideo from '../componentes/sectioncarreira';

{{/*Inicio do Componente*/}}
function Principal(){

 return(
    <main>
    <Slider />
    <SectionVideo />
    <SectionTecnologias />
  </main>
 );
}

export default Principal;