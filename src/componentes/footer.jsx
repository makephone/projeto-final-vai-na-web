{{/*Fazendo importes Necessarios*/}}
import React from "react";
{{/*Fazendo importe Da imagem*/}}
import redesocial from "../assets/linkeding.png"

{{/*Inicio do Componente*/}}
function Footer() {

    return (
        <footer>
            <div>
                <p>&copy; Todos os Direitos Reservados a Tiago Silva</p>
                <img src={redesocial} onClick={()=>window.open("https://www.linkedin.com/in/tiago-carvalho-34b034144/")} alt='rede social' title='linkeding' />
            </div>
        </footer>
    );
}
export default Footer;