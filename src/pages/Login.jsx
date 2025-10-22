// src/pages/Login.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/styles-global.css'; 
import CabecalhoSimples from '../components/CabecalhoSimples';
import BotaoGoogle from '../components/BotaoGoogle';

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault(); 
        console.log('Tentativa de Login...');
        navigate('/dashboard'); 
    };

    return (
        // ⭐️ AJUSTE CRUCIAL: Removemos o paddingTop do estilo inline ⭐️
        <div className="fundo-login-cadastro d-flex flex-column" style={{ minHeight: '100vh' }}>
            
            {/* ⭐️ AJUSTE: CabecalhoSimples agora está no fluxo, herdando o fundo degradê ⭐️ */}
            <CabecalhoSimples /> 
            
            <div className="container d-flex flex-column flex-grow-1">
                
                <div className="m-auto card-form-central"> 
                    
                    <h2 className="fw-bold mb-4 text-center">
                        Bem vindo(a) de volta!
                    </h2>
                    <p className="mb-4 text-center" style={{ fontSize: '0.9rem' }}>
                        Por favor, faça o login para acessar sua conta
                    </p>

                    <form onSubmit={handleLogin}> 
                        <div className="mb-3">
                            <label className="form-label" style={{ fontSize: '0.8rem', color: '#6c757d' }}>Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{ height: '45px' }}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label" style={{ fontSize: '0.8rem', color: '#6c757d' }}>Senha</label>
                            <div className="input-group">
                                <input 
                                    type={mostrarSenha ? 'text' : 'password'}
                                    className="form-control" 
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    style={{ height: '45px' }}
                                    required
                                />
                                <button
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    onClick={() => setMostrarSenha(!mostrarSenha)}
                                    style={{ 
                                        borderColor: '#ced4da', 
                                        backgroundColor: 'transparent',
                                        color: '#6c757d' 
                                    }}
                                >
                                    <i className={`bi bi-${mostrarSenha ? 'eye-slash' : 'eye'}`}></i>
                                </button>
                            </div>
                        </div>

                        <div className="mb-4">
                            <input 
                                type="checkbox" 
                                className="form-check-input me-2" 
                                id="lembrarDados"
                            />
                            <label className="form-check-label" htmlFor="lembrarDados" style={{ fontSize: '0.9rem' }}>
                                Lembrar dados
                            </label>
                        </div>

                        <button 
                            type="submit" 
                            className="btn btn-primary w-100 fw-bold btn-destaque"
                        >
                            Entrar
                        </button>
                    </form>

                    <div className="d-flex align-items-center my-4">
                        <hr className="flex-grow-1" style={{ borderColor: '#e9ecef' }} />
                        <span className="mx-3" style={{ color: '#6c757d' }}>ou</span>
                        <hr className="flex-grow-1" style={{ borderColor: '#e9ecef' }} />
                    </div>

                    <BotaoGoogle />

                    <div className="text-center mt-3">
                        <p className="mb-1" style={{ fontSize: '0.9rem', color: '#6c757d' }}>
                            Precisa criar uma conta? 
                            <Link to="/cadastro" style={{ color: 'var(--cor-destaque)', textDecoration: 'none', fontWeight: 'bold' }}>
                                Cadastrar-se
                            </Link>
                        </p>
                        <Link to="/esqueci-senha" style={{ color: 'var(--cor-destaque)', textDecoration: 'none', fontSize: '0.9rem' }}>
                            Esqueci minha senha!
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}