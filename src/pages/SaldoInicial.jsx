import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import CampoInput from '../components/CampoInput.jsx'; 
import Botao from '../components/Botao.jsx';
import Logo from '../assets/Logo.png'; 
import 'bootstrap-icons/font/bootstrap-icons.css';

const corDestaque = '#3B6CFF';

const formatarMoeda = (valor) => {
    let apenasDigitos = valor.replace(/\D/g, ''); 
    if (!apenasDigitos) return '';
    let valorNumerico = parseFloat(apenasDigitos) / 100;
    return valorNumerico.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
};

const handleFormatacaoMonetaria = (valorNovo, setter) => {
    let valorLimpo = valorNovo.slice(0, 15);
    let valorFormatado = formatarMoeda(valorLimpo);
    setter(valorFormatado);
};


export default function PaginaSaldoInicial() {
    const navegar = useNavigate();

    const [saldoInicial, setSaldoInicial] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Saldo Inicial Salvo:', { saldoInicial });
        
        navegar('/dashboard'); 
    };
    
    const fazerDepois = () => {
        navegar('/dashboard'); 
    };

    return (
        <div className="fundo-login-cadastro d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>

            <div style={{ position: 'absolute', top: '30px', left: '30px', width: '90%' }} className="d-flex align-items-center">
                <Link to="/metas" style={{ color: 'var(--cor-branco)', marginRight: '20px' }}>
                    <i className="bi bi-arrow-left" style={{ fontSize: '1.5rem' }}></i>
                </Link>
                <img src={Logo} alt="Logo FinBal" style={{ height: '30px' }} />
            </div>

            <div className="card-form-central p-4 p-md-5 bg-white shadow py-5">
                
                <h2 className="fw-bold mb-2 text-center" style={{ color: '#000000', fontSize: '1.8rem' }}>Adicione um valor inicial</h2>
                <p className="text-muted text-center mb-5" style={{ fontSize: '1rem' }}>
                    Para iniciarmos sua jornada de organização financeira sugerimos que você faça um cadastro inicial.
                </p>

                <form onSubmit={handleSubmit}>
                    
                    <CampoInput
                        rotulo="VALOR INICIAL DE ENTRADA"
                        tipo="text" 
                        valor={saldoInicial}
                        aoMudar={(v) => handleFormatacaoMonetaria(v, setSaldoInicial)} 
                        placeholder="R$ XXXXX,XX" 
                    />

                    <div className="d-grid mt-5"> 
                        <Botao
                            texto="Salvar"
                            estilo="destaque"
                            type="submit"
                        />
                    </div>
                </form>

                <div className="d-flex align-items-center my-4">
                    <hr className="flex-grow-1 mx-2" style={{ borderColor: '#f2f2f2' }} />
                    <span className="text-muted">ou</span>
                    <hr className="flex-grow-1 mx-2" style={{ borderColor: '#f2f2f2' }} />
                </div>

                <div className="d-grid">
                    <button
                        type="button"
                        className="btn btn-outline-secondary py-3 fw-bold w-100"
                        onClick={fazerDepois}
                        style={{ borderColor: 'var(--cor-cinza-claro)', color: '#000000' }}
                    >
                        Fazer isso depois
                    </button>
                </div>

            </div>
        </div>
    );
}