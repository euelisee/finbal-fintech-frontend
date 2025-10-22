import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/styles-global.css'; 

import CabecalhoDashboardApp from "../components/CabecalhoDashboardApp"; 
import MenuNavegacao from "../components/MenuNavegacao";
import { Card, AcaoIcone, CategoriaCard } from "../components/CardsDashboard"; 

export default function Dashboard() {
    const [mesSelecionado, setMesSelecionado] = useState("Janeiro");

    const alturaCardConta = "400px"; 
    const alturaCardInvestimentos = "130px"; 

    return (
        <div style={{ paddingBottom: '100px' }}> 
            
            <CabecalhoDashboardApp />

            <div className="container px-4 px-md-5 mt-3 pb-5">
                
                <div className="d-flex justify-content-center mb-5">
                    <select
                        className="form-select w-auto py-1 dropdown-mes" 
                        value={mesSelecionado}
                        onChange={(e) => setMesSelecionado(e.target.value)}
                    >
                        {["Janeiro", "Fevereiro", "Março", "Abril"].map((mes) => (
                            <option key={mes} value={mes} style={{ color: "#000" }}>
                                {mes}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="row g-4 mb-5">
                    
                    <div className="col-12 col-lg-7"> 
                        
                        <Card
                            titulo="SUA CONTA"
                            valor="R$26.563"
                            tipo="principal"
                            estiloExtra={{ height: alturaCardConta }} 
                        >
                            <div className="d-flex justify-content-center mt-4">
                                
                                <div className="text-center mx-5"> 
                                    <p className="fw-bold mb-0" style={{ color: 'var(--cor-sucesso)', fontSize: "1rem" }}>
                                        ↑ Entradas
                                    </p>
                                    <p className="fw-bold mb-0" style={{ color: 'var(--cor-sucesso)', fontSize: "1.5rem" }}>
                                        R$27.000
                                    </p>
                                </div>
                                
                                <div className="text-center mx-5">
                                    <p className="fw-bold mb-0" style={{ color: 'var(--cor-perigo)', fontSize: "1rem" }}>
                                        ↓ Saídas
                                    </p>
                                    <p className="fw-bold mb-0" style={{ color: 'var(--cor-perigo)', fontSize: "1.5rem" }}>
                                        R$437
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center pt-5">
                                <AcaoIcone icone="bi-file-earmark-text" texto="Contas a pagar" />
                                <AcaoIcone icone="bi-journal-text" texto="Extrato" />
                                <AcaoIcone icone="bi-bar-chart-line" texto="Gráficos" />
                            </div>
                        </Card>

                    </div>

                    <div className="col-12 col-lg-5"> 
                        <div className="row g-4 h-100">
                            
                            <div className="col-12">
                                <Card
                                    titulo="INVESTIMENTOS"
                                    valor="R$45.678,90"
                                    detalhe="+20% (12 meses)"
                                    estiloExtra={{ height: alturaCardInvestimentos }} 
                                />
                            </div>
                            
                            <div className="col-12">
                                <h5
                                    className="text-uppercase mb-3 fw-bold"
                                    style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "0.8rem" }}
                                >
                                    CATEGORIAS
                                </h5>
                                <div className="d-flex justify-content-between">
                                    <CategoriaCard nome="Shopping" progresso={70} /> 
                                    <CategoriaCard nome="Alimentação" progresso={45} /> 
                                    <CategoriaCard nome="Saúde" progresso={90} /> 
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <MenuNavegacao />
        </div>
    );
}