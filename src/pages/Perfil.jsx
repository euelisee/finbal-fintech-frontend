// src/pages/Perfil.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/styles-global.css'; 
import CampoPerfil from '../components/CampoPerfil'; 
import MenuNavegacao from '../components/MenuNavegacao';
import CabecalhoSimples from '../components/CabecalhoSimples'; 


export default function Perfil() {
    const navigate = useNavigate();
    
    const [isDirty, setIsDirty] = useState(false); 

    const [dadosUsuario, setDadosUsuario] = useState({
        nome: "Lise Developer",
        email: "lise.dev@finbal.com",
        senha: "********",
        dataNascimento: "13/10/1990",
    });

    const estiloFundo = {
        backgroundColor: 'var(--cor-fundo-escuro)',
        minHeight: '100vh',
    };

    const estiloAreaConteudo = {
        backgroundColor: 'var(--cor-cinza-claro)',
        minHeight: 'calc(100vh - 100px)',
        // ⭐️ AJUSTE CRUCIAL: Adicionar um padding superior (pt) para compensar a barra fixa ⭐️
        paddingTop: '70px', 
        color: '#3c4043', 
    };

    const handleLogout = () => {
        console.log('Usuário deslogado!');
        navigate('/dashboard'); 
    };
    
    const handleSaveProfile = () => {
        console.log('Perfil salvo com os novos dados:', dadosUsuario);
        setIsDirty(false);
        alert('Perfil atualizado com sucesso!');
    };
    
    const handleUpdate = (campo, novoValor) => {
        setDadosUsuario(prev => ({ ...prev, [campo]: novoValor }));
        setIsDirty(true);
    };


    return (
        <div style={estiloFundo}>
            {/* ⭐️ Cabeçalho Fixo ⭐️ */}
            <CabecalhoSimples />

            {/* ÁREA DE CONTEÚDO BRANCA/CINZA CLARO */}
            <div style={estiloAreaConteudo}>
                
                {/* ⭐️ Container interno para o conteúdo (O título 'Seu perfil' é a primeira coisa) ⭐️ */}
                <div className="container px-4 px-md-5 pt-3 pb-3">
                    
                    {/* Título Principal */}
                    <h2 className="fw-bold mb-3" style={{ color: 'var(--cor-fundo-escuro)' }}>
                        Seu perfil
                    </h2>

                    {/* GRID: Campos (Esquerda) e Botões (Direita) */}
                    <div className="row g-3">
                        
                        <div className="col-12 col-md-8">
                            
                            <CampoPerfil 
                                rotulo="Seu nome" 
                                valorInicial={dadosUsuario.nome}
                                onValorChange={(novoValor) => handleUpdate('nome', novoValor)}
                            />
                            
                            <CampoPerfil 
                                rotulo="Email" 
                                valorInicial={dadosUsuario.email}
                                tipo="email"
                                readOnly={true} 
                            />
                            
                            <CampoPerfil 
                                rotulo="Senha" 
                                valorInicial={dadosUsuario.senha}
                                tipo="password"
                                onValorChange={(novoValor) => handleUpdate('senha', novoValor)}
                            />

                            <CampoPerfil 
                                rotulo="Data de nascimento" 
                                valorInicial={dadosUsuario.dataNascimento}
                                tipo="text"
                                onValorChange={(novoValor) => handleUpdate('dataNascimento', novoValor)}
                            />
                        </div>

                        {/* COLUNA DIREITA: Botões Sair e Salvar */}
                        <div className="col-12 col-md-4 d-flex flex-column align-items-md-end align-items-start">
                            
                            {/* Botão Sair */}
                            <button
                                className="btn d-flex align-items-center justify-content-center mb-2"
                                onClick={handleLogout}
                                style={{ 
                                    width: '100%', 
                                    maxWidth: '180px',
                                    padding: '10px 20px',
                                    backgroundColor: 'var(--cor-cinza-claro)',
                                    color: 'var(--cor-destaque)',
                                    border: '1px solid var(--cor-destaque)',
                                    borderRadius: '8px',
                                    fontSize: '1.1rem'
                                }}
                            >
                                Sair
                                <i className="bi bi-box-arrow-right ms-2"></i>
                            </button>
                            
                            {/* Botão Salvar */}
                            {isDirty && (
                                <button
                                    className="btn btn-primary d-flex align-items-center justify-content-center"
                                    onClick={handleSaveProfile}
                                    style={{ 
                                        width: '100%', 
                                        maxWidth: '180px',
                                        padding: '10px 20px',
                                        backgroundColor: 'var(--cor-destaque)',
                                        color: 'var(--cor-branco)',
                                        border: 'none',
                                        borderRadius: '8px',
                                        fontSize: '1.1rem'
                                    }}
                                >
                                    Salvar
                                    <i className="bi bi-check-lg ms-2"></i>
                                </button>
                            )}
                        </div>
                    </div>
                </div>

            </div>
            
            {/* Menu de Navegação Inferior */}
            <MenuNavegacao />
        </div>
    );
}