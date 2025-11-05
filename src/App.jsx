import React from 'react';
import { BrowserRouter as Roteador, Routes, Route } from 'react-router-dom';
import PaginaInicial from './pages/PaginaInicial.jsx';
import PaginaCadastro from './pages/Cadastro.jsx';
import PaginaMetas from './pages/Metas.jsx';
import PaginaSaldoInicial from './pages/SaldoInicial.jsx';
import PaginaLogin from './pages/Login.jsx';
import PaginaDashboard from './pages/Dashboard.jsx';
import PaginaPerfil from './pages/Perfil.jsx';
import Conta from './pages/Conta.jsx';
import PaginaTransacaoEntrada from './pages/transacaoEntrada.jsx';
import PaginaTransacaoSaida from './pages/transacaoSaida.jsx';

const PaginaErro = () => <h1>Erro 404 - Página Não Encontrada</h1>;
export default function App() {
  return (
    <Roteador>
      { }
      <main className="d-flex flex-column min-vh-100">

        { }
        <Routes>
          { }
          <Route path="/" element={<PaginaInicial />} />

          { }
          <Route path="/login" element={<PaginaLogin />} />

          { }
          <Route path="/cadastro" element={<PaginaCadastro />} />

          { }
          <Route path="/metas" element={<PaginaMetas />} />

          { }
          <Route path="/saldo-inicial" element={<PaginaSaldoInicial />} />

          { }
          <Route path="/dashboard" element={<PaginaDashboard />} />
          { }
          <Route path="/perfil" element={<PaginaPerfil />} />
          { }
          <Route path="/conta" element={<Conta />} />

          { }
          <Route path="*" element={<PaginaErro />} />

          { }
          <Route path="/transacao-entrada" element={<PaginaTransacaoEntrada/>} />

          { }
          <Route path="/transacao-saida" element={<PaginaTransacaoSaida/>} />

        </Routes>

      </main>
    </Roteador>
  );
}