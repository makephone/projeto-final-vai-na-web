import  React from 'react'
import foto from "./avatar.png"
import './App.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function App() {


  return (
    <>
     <header>
      <div>
        <figure>
        <img src={foto} alt='foto de perfil' title='Tiago De Carvalho'/>
        <figcaption>Tiago Silva</figcaption>
        </figure>
      </div>
      <h1>Desenvolvedor Frontend</h1>
     </header>
     <main>
      <section>
      <div className='slide'>
      <button>/n</button>

      <button>/p</button>
        
      </div> 
        
        


      </section>
     </main>
     <footer>
      <p>rodape</p>
     </footer>
    </>
  )
}

export default App
