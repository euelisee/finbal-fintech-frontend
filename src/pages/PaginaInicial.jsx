import React from 'react';
import { Link } from 'react-router-dom';
import Botao from '../components/Botao.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/styles-global.css'; 
import Logo from '../assets/Logo.png';

export default function Inicial() {
    return (
        <div className="fundo-login-cadastro d-flex flex-column align-items-center min-vh-100 text-start">

            <main className="container d-flex flex-column justify-content-center flex-grow-1">
                <div className="row">
                    <div className="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-0">

                        <div className="mb-4 mt-5 mt-md-0">
                            <img
                                src={Logo}
                                alt="Logo da FinBal - Controle Financeiro"
                                className="img-fluid"
                                style={{ height: '50px' }}
                            />
                        </div>

                        <p className="display-4 fw-normal mb-5" style={{ lineHeight: '1.2' }}>
                            Controle sua vida financeira com praticidade.
                        </p>

                        <div className="d-grid gap-3 d-sm-flex justify-content-sm-start mt-4">

                            <Link to="/login" style={{ textDecoration: 'none' }}>
                                <Botao
                                    texto="Acesse sua conta"
                                    estilo="secundario"
                                />
                            </Link>                            

                            <Link to="/cadastro" style={{ textDecoration: 'none' }}>
                                <Botao
                                    texto="Abra sua conta"
                                    estilo="destaque"
                                />
                            </Link>
                        </div>

                    </div>
                </div>
            </main>

        </div>
    );
}