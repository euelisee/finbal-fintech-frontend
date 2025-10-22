import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, useNavigate } from 'react-router-dom';
import suaLogoImage from '../assets/Logo.png'; 

export default function CabecalhoSimples() {
    const navigate = useNavigate();
    
    const corIcone = 'var(--cor-cinza-claro)'; 
    const estiloIconeVoltar = { color: corIcone, fontSize: '1.5rem' };
    const estiloLogo = { height: '30px', width: 'auto' };

    return (
        <nav 
            className="navbar navbar-expand-lg bg-transparent" 
            style={{ 
                height: '70px',
                paddingTop: '15px',
                paddingBottom: '15px'
            }}
        >
            <div className="container-fluid px-4 px-md-5 d-flex justify-content-start align-items-center">
                
                {}
                <div className="d-flex align-items-center">
                    
                    {}
                    <button 
                        className="btn btn-link p-0 me-2" 
                        onClick={() => navigate(-1)} 
                        style={estiloIconeVoltar}
                    >
                        <i className="bi bi-arrow-left"></i>
                    </button>

                    {}
                    <Link className="navbar-brand d-flex align-items-center p-0 m-0" to="/">
                        <img 
                            src={suaLogoImage} 
                            alt="Logo FinBal" 
                            style={estiloLogo}
                        />
                    </Link>
                </div>

                {}
                
            </div>
        </nav>
    );
}