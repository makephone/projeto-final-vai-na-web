{{/*Fazendo importes Necessarios*/}}
import React, { useState } from 'react';
import foto from "../assets/avatar.png";
import { Outlet, Link } from "react-router-dom";

{{/*Inicio do Componente Header*/}}
function Header() {
    {{/*Usando Hooks*/}}
    const [menu, setMenu] = useState(false);
    const [text, setText] = useState("+");
    {{/*Definindo a função*/}}
    const mudar = () => {
        let status = !menu;
        setMenu(status)
        let texto = !status == true ? "+" : "x";
        setText(texto)
    }

    return (
        <>
            <header>
                
                {menu == true &&
                    <nav className='menu'>
                        <ul>
                            <li><Link onClick={() => mudar()} className='link' to="/">Home</Link></li>
                            <li><Link onClick={() => mudar()} className='link' to="/sobre">Sobre Mim</Link></li>
                            <li><Link onClick={() => mudar()} className='link' to="/certificados">Certificado</Link></li>

                        </ul>
                    </nav>
                }
                <div>
                    <figure>
                        <img src={foto} alt='foto de perfil' title='Tiago De Carvalho' />
                        <figcaption>Tiago Silva<div className='likeding' /></figcaption>
                    </figure>
                </div>
                <button className='rotating' onClick={() => mudar()}>{text}
                </button>
                <h1>Desenvolvedor Frontend</h1>
            </header>
            <Outlet />
        </>
    );
}

export default Header;