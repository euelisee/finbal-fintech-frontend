// src/App.jsx
import React from 'react';
// Importamos o Roteador e as ferramentas de rotas do React Router DOM
import { BrowserRouter as Roteador, Routes, Route } from 'react-router-dom';

// ----------------------------------------------------
// 1. IMPORTAÇÃO DOS COMPONENTES DE LAYOUT E PÁGINAS
// ----------------------------------------------------

// ⚠️ REMOVIDO: O Rodapé genérico foi removido, pois a Dashboard usa MenuNavegacao.
// import Rodape from './components/Rodape.jsx'; 

import PaginaInicial from './pages/PaginaInicial.jsx';
import PaginaCadastro from './pages/Cadastro.jsx';
import PaginaMetas from './pages/Metas.jsx';
import PaginaSaldoInicial from './pages/SaldoInicial.jsx';
import PaginaLogin from './pages/Login.jsx';
import PaginaDashboard from './pages/Dashboard.jsx'; 
import PaginaPerfil from './pages/Perfil.jsx';

// Requisito 4
const PaginaErro = () => <h1>Erro 404 - Página Não Encontrada</h1>; // Requisito 5


// ----------------------------------------------------
// 2. COMPONENTE PRINCIPAL APP
// ----------------------------------------------------
export default function App() {
  return (
    // Roteador: Envelopa toda a aplicação e permite a navegação
    <Roteador>
      {/* main: Container principal do conteúdo que muda (d-flex e min-vh-100 para o layout) */}
      <main className="d-flex flex-column min-vh-100">

        {/* Routes: Onde definimos o MAPA de URLs */}
        <Routes>
          {/* Rota 1: URL raiz (/) mostra a PaginaInicial */}
          <Route path="/" element={<PaginaInicial />} />

          {/* Rota 2: URL de Login (/login) */}
          <Route path="/login" element={<PaginaLogin />} />

          {/* Rota de Cadastro/Registro */}
          <Route path="/cadastro" element={<PaginaCadastro />} />

          {/* Rota da Página de Metas */}
          <Route path="/metas" element={<PaginaMetas />} />
          
          {/* Rota da Página de Saldo Inicial */}
          <Route path="/saldo-inicial" element={<PaginaSaldoInicial />} /> 
          
          {/* ⭐️ ROTA CHAVE: URL do sistema (/dashboard) - Agora usa o componente real ⭐️ */}
          <Route path="/dashboard" element={<PaginaDashboard />} />
          {/* ⭐️ ROTA CHAVE: URL do sistema (/dashboard) - Agora usa o componente real ⭐️ */}
          <Route path="/perfil" element={<PaginaPerfil />} />

          {/* Rota final: URL de Erro (o path="*" captura qualquer URL não mapeada) */}
          <Route path="*" element={<PaginaErro />} />
        
          {/* Lise: As suas futuras rotas CRUD (Gastos, Receitas, Investimentos) 
                   para o Requisito 6 devem ser adicionadas aqui!
          */}

        </Routes>
        
        {/* ⚠️ NOTA: O Rodapé genérico FOI REMOVIDO daqui. 
           O menu fixo da Dashboard (MenuNavegacao) é carregado dentro da PaginaDashboard.
        */}

      </main>
    </Roteador>
  );
}