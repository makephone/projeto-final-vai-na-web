{{/*Fazendo importes Necessarios*/}}
import React, { useState, useEffect } from "react";
{{/*Fazendo importes Das Imagens*/}}
import slideUm from "../assets/slide1.jpg";
import slideDois from "../assets/slide2.jpg";
import slideTres from "../assets/slide3.jpg";

{{/*Inicio do Componente*/}}
function Slide() {
  {{/*Trabalhando use State*/}}
  const [slide, setSlide] = useState(1);
  const [tempo, setTempo] = useState(false);

  {{/*Definindo a Função chamaslide*/}}  
  function chamaSlide(n) {
    clearInterval(tempo)
    setSlide(n);
  }

  {{/*Trabalhando o Hook useEfect sobre a variável slide*/}}
  useEffect(() => {

      const timer = setTimeout(() => {
      let atual = slide + 1;
      atual = atual == 4 ? 1 : atual;
      setSlide(atual);
    }, 5000);

  setTempo(timer)

}, [slide]);


return (
    <>
      <section>
        {slide == 1 &&
          <div className='slide fade' style={{ backgroundImage: `url(${slideUm})` }}>
            <button className='next' onClick={() => chamaSlide(2)}>&#10095;</button>
            <button className='prev' onClick={() => chamaSlide(3)}>&#10094;</button>
            <div className='texto'>
              <h3>Bem-vindo a meu Blog  </h3>
            </div>
            <div className='linha'>
              <span id="active" className="dot" onClick={() => chamaSlide(1)} ></span>
              <span className="dot" onClick={() => chamaSlide(2)}></span>
              <span className="dot" onClick={() => chamaSlide(3)}></span>
            </div>
          </div>
        }

        {slide == 2 &&
          <div className='slide fade' style={{ backgroundImage: `url(${slideDois})` }}>
            <button className='next' onClick={() => chamaSlide(3)}>&#10095;</button>
            <button className='prev' onClick={() => chamaSlide(1)}>&#10094;</button>
            <div>
              <h3 className='texto'>STACKS</h3>
              <div className='fundoTexto'>
                As Melhores Tecnologias
              </div>
            </div>
            <div className='linha'>
              <span className="dot" onClick={() => chamaSlide(1)} ></span>
              <span id="active" className="dot" onClick={() => chamaSlide(2)}></span>
              <span className="dot" onClick={() => chamaSlide(3)}></span>
            </div>
          </div>
        }
        {slide == 3 &&
          <div className='slide fade' style={{ backgroundImage: `url(${slideTres})` }}>
            <button className='next' onClick={() => chamaSlide(1)}>&#10095;</button>
            <button className='prev' onClick={() => chamaSlide(2)}>&#10094;</button>
            <div>
              <h3 className='texto'>Scrum</h3>
              <div className='fundoTexto'>
                As Melhores Práticas
              </div>
            </div>
            <div className='linha'>
              <span className="dot" onClick={() => chamaSlide(1)} ></span>
              <span className="dot" onClick={() => chamaSlide(2)}></span>
              <span id="active" className="dot" onClick={() => chamaSlide(3)}></span>
            </div>
          </div>
        }
      </section>
    </>
  )
}

export default Slide;