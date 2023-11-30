{{/*Fazendo importes Necessarios*/}}
import React from "react";
{{/*Fazendo importes Das Imagens*/}}
import estrela from "../assets/estrela.png";

{{/*Inicio do Componente*/}}
function Tecnologias() {
  return (
    <section className='tecnologias'>
      <h3 className='subtitulo'>Tecnologias</h3>
      <div className='grid'>
        <div className='titulo'>Habilidade</div>
        <div className='titulo'>Score</div>
        <div className='item'>HTML5</div>
        <div className='item'>
          <img src={estrela} alt='estrela' />
          <img src={estrela} alt='estrela' />
          <img src={estrela} alt='estrela' />
          <img src={estrela} alt='estrela' />
          <img src={estrela} alt='estrela' />
        </div>
        <div className='item'>CSS3</div>
        <div className='item'>
          <img src={estrela} alt='estrela' />
          <img src={estrela} alt='estrela' />
          <img src={estrela} alt='estrela' />
          <img src={estrela} alt='estrela' />
          <img src={estrela} alt='estrela' />
        </div>
        <div className='item'>Javascript</div>
        <div className='item'>
          <img src={estrela} alt='estrela' />
          <img src={estrela} alt='estrela' />
          <img src={estrela} alt='estrela' />
          <img src={estrela} alt='estrela' />
          <img src={estrela} alt='estrela' />
        </div>
        <div className='item'>React</div>
        <div className='item'>
          <img src={estrela} alt='estrela' />
          <img src={estrela} alt='estrela' />
          <img src={estrela} alt='estrela' />
          <img src={estrela} alt='estrela' />
          <img src={estrela} alt='estrela' />
        </div>
      </div>
    </section>
  )
}

export default Tecnologias;