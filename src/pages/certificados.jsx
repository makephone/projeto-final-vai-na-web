{{/*Fazendo importes Necessarios*/}}
import React from "react";
{{/*Inicio do Componente*/}}
function Certificados() {

    return (
        <main>
            
            <section className="titulos">
                <h3>Formação Acadêmica</h3>
                <ol type="I">
                    <li>Análise e Desenvolvimento de Sistemas(FACAM) 2021</li>
                    <li>Adminstração(UEMA) 2019-Em andamento</li>
                    <li>Pós-Graduação Informática para Edu.(Ifma) 2022-Em andamento</li>
                    <li>Pós-Graduação em Edu. Prof. e Tecn. em Docencia IFES (2023)-Em andamento </li>
                </ol>
            </section>

            <section className="titulos">
                <h3>Cursos Complementares</h3>
                <ol type="I">
                    <li>Bootcamp Formação Frontend "PCD" (Soul Code Academy) 2023</li>
                    <li>React: Aplicaciones en tiempo real con Socket-io (UDEMY) 2022</li>
                    <li>Certificado de Autoridade React (Dev Media) 2022</li>
                </ol>
            </section>
        </main>
    );
}

export default Certificados;