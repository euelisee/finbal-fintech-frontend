import React, { useState } from 'react';
import CampoInput from '../components/CampoInput.jsx';
import Botao from '../components/Botao.jsx';
import BotaoGoogle from '../components/BotaoGoogle.jsx';
import Logo from '../assets/Logo.png';
import { Link, useNavigate } from 'react-router-dom'; 
import 'bootstrap-icons/font/bootstrap-icons.css';

const corDestaque = '#3B6CFF';

const mascaraData = (valor) => {
    let apenasDigitos = valor.replace(/\D/g, ''); 
    apenasDigitos = apenasDigitos.substring(0, 8);

    if (apenasDigitos.length > 2) {
        apenasDigitos = apenasDigitos.replace(/^(\d{2})/, '$1/');
    }
    if (apenasDigitos.length > 5) {
        apenasDigitos = apenasDigitos.replace(/^(\d{2})\/(\d{2})/, '$1/$2/');
    }
    
    return apenasDigitos;
};

const estiloInputReduzido = { height: '40px', fontSize: '0.9rem' };


export default function PaginaCadastro() {
    const navegar = useNavigate(); 
    
    const [nome, setNome] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSetData = (valorNovo) => {
        const valorMascarado = mascaraData(valorNovo);
        setDataNascimento(valorMascarado);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('Dados de Cadastro:', { nome, dataNascimento, email, senha });
        navegar('/metas'); 
    };

    const handleLoginGoogle = () => {
        alert("Iniciando processo de autenticação com Google...");
    };

    return (
        <div className="fundo-login-cadastro" style={{ minHeight: '100vh', paddingTop: '80px' }}>
            
            <div style={{ position: 'absolute', top: '30px', left: '30px', width: '90%' }} className="d-flex align-items-center">
                <Link to="/" style={{ color: 'var(--cor-branco)', marginRight: '20px' }}>
                    <i className="bi bi-arrow-left" style={{ fontSize: '1.5rem' }}></i>
                </Link>
                <img src={Logo} alt="Logo FinBal" style={{ height: '30px' }} />
            </div>

            <div className="container d-flex flex-column" style={{ minHeight: 'calc(100vh - 80px)' }}> 
                
                <div className="m-auto card-form-central">

                    <h2 className="fw-bold mb-1" style={{ color: corDestaque }}>Cadastre-se</h2>
                    <p className="text-muted mb-3" style={{ fontSize: '0.9rem' }}>Cadastre-se no FinBal e aproveite os recursos</p>

                    <form onSubmit={handleSubmit}>

                        <CampoInput rotulo="Nome completo" tipo="text" valor={nome} aoMudar={setNome} estiloInput={estiloInputReduzido} />

                        <CampoInput
                            rotulo="Data de nascimento"
                            tipo="text" 
                            valor={dataNascimento}
                            aoMudar={handleSetData} 
                            placeholder="DD/MM/YYYY" 
                            icone="bi-calendar" 
                            estiloInput={estiloInputReduzido}
                        />

                        <CampoInput rotulo="Email" tipo="email" valor={email} aoMudar={setEmail} estiloInput={estiloInputReduzido} />

                        <CampoInput rotulo="Senha" tipo="password" valor={senha} aoMudar={setSenha} estiloInput={estiloInputReduzido} />

                        <div className="d-grid mt-3">
                            <Botao texto="Cadastre-se" estilo="destaque" type="submit" className="btn-destaque" />
                        </div>
                    </form>

                    <div className="d-flex align-items-center my-3">
                        <hr className="flex-grow-1 mx-2" style={{ borderColor: '#f2f2f2' }} />
                        <span className="text-muted" style={{ fontSize: '0.85rem' }}>ou</span>
                        <hr className="flex-grow-1 mx-2" style={{ borderColor: '#f2f2f2' }} />
                    </div>
                    <BotaoGoogle onClick={handleLoginGoogle} />
                    <p className="text-center mt-3 text-muted" style={{ fontSize: '0.9rem' }}>
                        Você já possui uma conta? {' '}
                        <Link to="/login" style={{ color: corDestaque, textDecoration: 'none' }}>
                            Fazer Login
                        </Link>
                    </p>

                </div>
            </div>
        </div>
    );
}