{{/*Fazendo importes Necessarios*/}}
import React,{useState} from "react";
{{/*Fazendo importes Das imagens*/}}
import modoClaro from "../assets/lampada_on.png";
import modoBlack from "../assets/lampada_off.png";

{{/*Inicio do Componente*/}}
function ModoClaroeEscuro() {

  {{/*Definindo Hooks*/}}
const [escuro,setescuro]=useState(false);

{{/*Definindo a função modo escuro*/}}
function modoEscuro(){

  let status=!escuro 
   if(status){
     document.styleSheets[2].disabled=true;
   }else{
     document.styleSheets[2].disabled=false;
   }

   setescuro(status)
     
   }
    return (
        <>
            <button className='modoClaro' onClick={() => modoEscuro()}><img src={modoClaro} alt="Modo Claro" /></button>
            <button className='modoEscuro' onClick={() => modoEscuro()}><img src={modoBlack} alt="Modo escuro" /></button>
        </>
    );
}

export default ModoClaroeEscuro;