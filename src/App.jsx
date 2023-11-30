{{/*Fazendo importes Necessarios*/}}
import React from 'react'
{{/*===============================================================================Fazendo importes do CSS não foi utilizado styled-component para uso do efeito de tela claro e escura  pois caso utliza-se teria que trabalha com context API em todos os componentes como expliquei para a carol na aula do dia 27/11 da noite
==============================================================================================================================================================*/}}
import './Modoescuro.css'
import './Modoclaro.css'

{{/*Fazendo importes Dos Componentes*/}}
import Footer from './componentes/footer';
import ModoClaroOuEscuro from './componentes/modoClaroEscuro';
import Rotas from './routes';

function App() {

  return (
    <>
      <Rotas />
      <ModoClaroOuEscuro />
      <Footer />
    </>
  )
}

export default App
