// src/pages/Metas.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import CampoInput from '../components/CampoInput.jsx'; 
import CampoSelecao from '../components/CampoSelecao.jsx'; 
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


export default function PaginaMetas() {
    const navegar = useNavigate();

    const [gastoMensal, setGastoMensal] = useState('');
    const [metaSelecionada, setMetaSelecionada] = useState('Cursos/Estudos'); 
    const [valorMeta, setValorMeta] = useState('');
    
    const opcoesMeta = [
        { valor: 'Cursos/Estudos', texto: 'Cursos/Estudos' },
        { valor: 'Viagem', texto: 'Viagem' },
        { valor: 'CasaPropria', texto: 'Casa Própria' },
        { valor: 'Carro', texto: 'Carro Novo' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados da Meta:', { gastoMensal, metaSelecionada, valorMeta });
        navegar('/saldo-inicial'); 
    };
    
    const fazerDepois = () => {
        navegar('/dashboard'); 
    };

    return (
        <div className="fundo-login-cadastro d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>

            {/* Cabeçalho Fixo (mantido o posicionamento absoluto para não interferir no fluxo) */}
            <div style={{ position: 'absolute', top: '30px', left: '30px', width: '90%' }} className="d-flex align-items-center">
                <Link to="/cadastro" style={{ color: 'var(--cor-branco)', marginRight: '20px' }}>
                    <i className="bi bi-arrow-left" style={{ fontSize: '1.5rem' }}></i>
                </Link>
                <img src={Logo} alt="Logo FinBal" style={{ height: '30px' }} />
            </div>

            {/* Card do Formulário - Reduzindo py-5 para py-4 e usando a classe centralizada */}
            <div className="card-form-central p-4 py-4 shadow" style={{ width: '100%', maxWidth: '450px' }}>
                
                {/* Título e Subtítulo - Reduzindo mb-5 para mb-3 */}
                <h2 className="fw-bold mb-2 text-center" style={{ color: '#000000', fontSize: '1.8rem' }}>Nos conte suas metas</h2>
                <p className="text-muted text-center mb-3" style={{ fontSize: '1rem' }}>
                    Quais são seus sonhos financeiros? Vamos te ajudar a conquistá-los!
                </p>

                {/* Formulário */}
                <form onSubmit={handleSubmit}>
                    
                    {/* Campos de Input (CampoInput e CampoSelecao já têm um espaçamento razoável) */}
                    <CampoInput
                        rotulo="PROJEÇÃO DE GASTO LIMITE MENSAL"
                        tipo="text" 
                        valor={gastoMensal}
                        aoMudar={(v) => handleFormatacaoMonetaria(v, setGastoMensal)} 
                        placeholder="R$ XXXXX,XX" 
                    />

                    <CampoSelecao
                        rotulo="META FINANCEIRA"
                        valor={metaSelecionada}
                        aoMudar={setMetaSelecionada}
                        opcoes={opcoesMeta}
                    />

                    <CampoInput
                        rotulo="VALOR DA META FINANCEIRA"
                        tipo="text"
                        valor={valorMeta}
                        aoMudar={(v) => handleFormatacaoMonetaria(v, setValorMeta)}
                        placeholder="R$ XXXXX,XX"
                    />

                    {/* Botão de Destaque (Salvar) - Reduzindo mt-5 para mt-4 */}
                    <div className="d-grid mt-4"> 
                        <Botao
                            texto="Salvar"
                            estilo="destaque"
                            type="submit"
                        />
                    </div>
                </form>

                {/* Separador "ou" - Reduzindo my-4 para my-3 */}
                <div className="d-flex align-items-center my-3">
                    <hr className="flex-grow-1 mx-2" style={{ borderColor: '#f2f2f2' }} />
                    <span className="text-muted">ou</span>
                    <hr className="flex-grow-1 mx-2" style={{ borderColor: '#f2f2f2' }} />
                </div>

                {/* Botão "Fazer isso depois" (Contorno) */}
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