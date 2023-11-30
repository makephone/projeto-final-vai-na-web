{{/*Fazendo Alguns Importes  */}}
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
{{/*Importado as Páginas  */}}
import Home from "./pages/home"
import Sobre from "./pages/sobre"
import Menu from "./componentes/header";
import Certificados from "./pages/certificados";

function Rotas(){

return(
<BrowserRouter>
      <Routes>
      <Route path="/" element={<Menu />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="certificados" element={<Certificados />} />
          <Route path="*" element={<Sobre />} />
        </Route>
      </Routes>
    </BrowserRouter>
)
};

export default Rotas;