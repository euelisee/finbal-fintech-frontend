import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Card = ({ titulo, valor, detalhe, tipo, children, estiloExtra }) => {
    const corTitulo = "rgba(255, 255, 255, 0.7)";
    const tamanhoValor = tipo === "principal" ? "3rem" : "1.5rem";

    return (
        <div
            className="card-base" 
            style={{ height: "100%", ...estiloExtra }}
        >
            <p
                className="text-uppercase mb-2 fw-normal"
                style={{ fontSize: "0.9rem", color: corTitulo }}
            >
                {titulo}
            </p>

            {valor && (
                <h2 className="fw-bold mb-0" style={{ color: 'var(--cor-branco)', fontSize: tamanhoValor }}>
                    {valor}
                </h2>
            )}

            {detalhe && (
                <p
                    className="mt-2 mb-0 fw-bold"
                    style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.6)" }}
                >
                    {detalhe}
                </p>
            )}
            {children}
        </div>
    );
};

export const AcaoIcone = ({ icone, texto }) => {
    
    const estiloTexto = { 
        fontSize: "0.8rem", 
        color: 'var(--cor-cinza-claro)', 
        lineHeight: 1.2,
        fontWeight: 'normal',
    };

    const textoFormatado = texto === "Contas a pagar" 
        ? (
            <div className="d-flex flex-column align-items-center"> 
                <p className="mb-0" style={estiloTexto}>Contas</p>
                <p className="mb-0" style={estiloTexto}>a pagar</p>
            </div>
        )
        : (
            <div className="text-center">
                <p className="mb-0" style={estiloTexto}>{texto}</p>
            </div>
        );

    return (
        <div className="text-center" style={{ width: '90px', margin: '0 10px' }}> 
            <button
                className="btn-acao-dashboard mb-2" 
                onClick={() => console.log(`Ação: ${texto}`)}
            >
                <i className={`bi ${icone}`}></i>
            </button>
            {textoFormatado}
        </div>
    );
};
export const CategoriaCard = ({ nome, progresso = 70 }) => {
    const iconeFinal = nome === 'Shopping' ? 'bi-bag' : nome === 'Alimentação' ? 'bi-egg-fried' : 'bi-heart';

    return (
        <div
            className="card-categorias text-center d-flex flex-column justify-content-between align-items-center" 
            style={{ width: "31%", minWidth: '90px' }} 
        >
            <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1">
                <i className={`bi ${iconeFinal} mb-2`} style={{ color: 'var(--cor-cinza-claro)', fontSize: "1.8rem" }}></i>
                <p className="mb-0" style={{ fontSize: "0.9rem", color: 'var(--cor-cinza-claro)' }}>
                    {nome}
                </p>
            </div>

            <div className="indicador-progresso-categoria">
                <div 
                    className="indicador-progresso-cheio" 
                    style={{ width: `${progresso}%` }} 
                ></div>
            </div>
        </div>
    );
};