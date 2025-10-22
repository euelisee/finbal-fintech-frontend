// src/components/CabecalhoSimples.jsx

import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, useNavigate } from 'react-router-dom';
import suaLogoImage from '../assets/Logo.png'; 

export default function CabecalhoSimples() {
    const navigate = useNavigate();
    
    // Cores e estilos simples para o conteúdo
    const corIcone = 'var(--cor-cinza-claro)'; 
    const estiloIconeVoltar = { color: corIcone, fontSize: '1.5rem' };
    const estiloLogo = { height: '30px', width: 'auto' };

    return (
        // ⭐️ AJUSTE CRUCIAL: Removemos 'navbar fixed-top' e o 'style={{ backgroundColor: ... }}' ⭐️
        <nav 
            className="navbar navbar-expand-lg bg-transparent" // bg-transparent para garantir
            style={{ 
                height: '70px',
                paddingTop: '15px',
                paddingBottom: '15px'
            }}
        >
            <div className="container-fluid px-4 px-md-5 d-flex justify-content-start align-items-center">
                
                {/* GRUPO ESQUERDO: Seta de Voltar e Logo */}
                <div className="d-flex align-items-center">
                    
                    {/* Seta de Voltar */}
                    <button 
                        className="btn btn-link p-0 me-2" 
                        onClick={() => navigate(-1)} 
                        style={estiloIconeVoltar}
                    >
                        <i className="bi bi-arrow-left"></i>
                    </button>

                    {/* Logo FinBal */}
                    <Link className="navbar-brand d-flex align-items-center p-0 m-0" to="/">
                        <img 
                            src={suaLogoImage} 
                            alt="Logo FinBal" 
                            style={estiloLogo}
                        />
                    </Link>
                </div>

                {/* ⭐️ GRUPO DIREITO: REMOVIDO (Não terá ícone de Notificação ou Perfil) ⭐️ */}
                
            </div>
        </nav>
    );
}