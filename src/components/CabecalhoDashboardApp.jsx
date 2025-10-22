import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

export default function CabecalhoDashboardApp() {
    return (
        <nav className="navbar navbar-expand-lg bg-transparent pt-3 pb-3 sticky-top" style={{ height: '70px' }}>
            <div className="container-fluid px-4 px-md-5">
                
                {}
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <i className="bi bi-graph-up-arrow" style={{ color: 'var(--cor-destaque)', fontSize: '1.5rem', marginRight: '5px' }}></i>
                    <span className="fw-bold" style={{ color: 'var(--cor-cinza-claro)', fontSize: '1.5rem' }}>
                        FinBal
                    </span>
                </Link>

                {}
                <div className="d-flex align-items-center">
                    
                    {}
                    <button 
                        className="btn btn-link p-0 me-3" 
                        style={{ color: 'var(--cor-cinza-claro)' }}
                        onClick={() => console.log('Notificações Clicadas')}
                    >
                        <i className="bi bi-bell" style={{ fontSize: '1.5rem' }}></i>
                    </button>
                    
                    {}
                    <Link 
                        to="/perfil" 
                        className="btn btn-link p-0 me-0" 
                        style={{ color: 'var(--cor-cinza-claro)' }}
                    >
                        <i className="bi bi-person-circle" style={{ fontSize: '1.5rem' }}></i>
                    </Link>
                </div>
            </div>
        </nav>
    );
}