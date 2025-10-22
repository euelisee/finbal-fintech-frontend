// src/main.jsx

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// ----------------------------------------------------
// 1. CARREGAMENTO DOS ESTILOS
// ----------------------------------------------------

// Importa o Bootstrap (biblioteca CSS essencial para suas classes funcionarem)
import 'bootstrap/dist/css/bootstrap.min.css';

// Importa seu arquivo de estilos global que contém as cores, a fonte Inter e o fundo.
// O caminho está correto, apontando para a pasta 'styles'
import './styles/styles-global.css'; 


// ----------------------------------------------------
// 2. COMPONENTE PRINCIPAL
// ----------------------------------------------------

// Importa o componente principal App (que contém as rotas)
import App from './App.jsx'; 


// ----------------------------------------------------
// 3. MONTAGEM DA APLICAÇÃO NO HTML
// ----------------------------------------------------

// 1. Encontra a div "root" no index.html
const container = document.getElementById('root');

// 2. Cria a raiz do React para a aplicação
const root = createRoot(container);

// 3. Renderiza (mostra) o componente App na tela
// <StrictMode> é uma ferramenta do React para detectar problemas potenciais no código.
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);