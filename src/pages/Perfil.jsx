import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/styles-global.css'; 
import CampoPerfil from '../components/CampoPerfil'; 
import MenuNavegacao from '../components/MenuNavegacao';
import CabecalhoDashboardApp from '../components/CabecalhoDashboardApp'; 

import { buscarUsuarioPorId, atualizarUsuario } from '../services/usuarioService';

const ID_USUARIO_FIXO = 1; 
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

const DADOS_DEMO = {
    nome: "Lise Demo", 
    sobrenome: "Developer", 
    email: "demo@finbal.com", 
    senha: "********", 
    telefone: "", 
    cpf: "",
    dataNascimento: "13/10/1990", 
    id: ID_USUARIO_FIXO,
};


export default function Perfil() {
    const navigate = useNavigate();
    
    const [dadosUsuario, setDadosUsuario] = useState(DADOS_DEMO);
    const [feedback, setFeedback] = useState({ mensagem: '', tipo: '' });
    useEffect(() => {
        const carregarUsuario = async () => {
            try {
                const usuario = await buscarUsuarioPorId(ID_USUARIO_FIXO);
                setDadosUsuario({
                    ...usuario,
                    senha: DADOS_DEMO.senha, 
                });
            } catch (error) {
                console.error("Erro ao carregar usuário:", error);
                setFeedback({ mensagem: 'Erro ao carregar dados do perfil.', tipo: 'danger' });
            }
        };

        carregarUsuario();
    }, []); 
    const handleFieldUpdate = async (field, value) => {
        let valorAjustado = value;
        const updatePayload = { [field]: valorAjustado };

        try {
            const response = await atualizarUsuario(dadosUsuario.id, updatePayload);
            
            setDadosUsuario(prevDados => ({
                ...prevDados,
                [field]: valorAjustado,
            }));
            setFeedback({ mensagem: `Campo '${field}' atualizado com sucesso!`, tipo: 'success' });

        } catch (error) {
            console.error("Erro ao atualizar campo:", error);
            setFeedback({ mensagem: `Erro ao atualizar campo '${field}'.`, tipo: 'danger' });
        }
        
        setTimeout(() => setFeedback({ mensagem: '', tipo: '' }), 3000);
    };

    const handleLogout = () => {
        console.log('Usuário deslogado!');
        navigate('/login'); 
    };

    const estiloHeader = {
        backgroundColor: 'var(--cor-fundo-escuro)', 
        position: 'sticky', 
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    };


    const estiloFundo = {
        backgroundColor: 'var(--cor-fundo-escuro)',
        minHeight: '100vh',
    };

    const estiloAreaConteudo = {
        backgroundColor: 'var(--cor-cinza-claro)',
        minHeight: 'calc(100vh - 100px)',
        paddingTop: '20px', 
        color: '#3c4043', 
    };
    
    const campos = [
        { rotulo: "Nome", campo: "nome", tipo: "text", readOnly: false },
        { rotulo: "Sobrenome", campo: "sobrenome", tipo: "text", readOnly: false },
        { rotulo: "Email", campo: "email", tipo: "email", readOnly: false },
        { rotulo: "Senha", campo: "senha", tipo: "password", readOnly: false }, 
        { rotulo: "Telefone", campo: "telefone", tipo: "text", readOnly: false },
        { rotulo: "CPF", campo: "cpf", tipo: "text", readOnly: false },
    ];


    return (
        <div style={estiloFundo}>
            
            <div style={estiloHeader}>
                <CabecalhoDashboardApp /> 
            </div>

            {}
            <div style={estiloAreaConteudo}>
                <div className="container px-4 px-md-5 py-4">
                    
                    {}
                    <button 
                        onClick={() => navigate('/')} 
                        className="btn btn-link p-0 mb-4" 
                        style={{ 
                            color: '#3c4043', 
                            fontSize: '1.5rem', 
                            display: 'flex', 
                            alignItems: 'center' 
                        }}
                    >
                        <i className="bi bi-arrow-left me-2"></i>
                    </button>
                    
                    {}
                    {feedback.mensagem && (
                        <div className={`alert alert-${feedback.tipo} fade show text-center mb-4`} role="alert">
                            {feedback.mensagem}
                        </div>
                    )}
                    
                    {}
                    {}
                    <div className="mb-5"> 
                        <h1 
                            className="mt-2" 
                            style={{ 
                                color: 'var(--cor-fundo-escuro)', 
                                fontWeight: 'bold',
                                fontSize: '2rem' 
                            }}
                        >
                            Seu perfil
                        </h1>
                    </div>
                    {}


                    {}
                    <div className="row">
                        {}
                        <div className="col-12 col-md-8">
                            
                            {}
                            {campos.map((campo) => (
                                <CampoPerfil
                                    key={campo.campo}
                                    rotulo={campo.rotulo}
                                    valorInicial={dadosUsuario[campo.campo]}
                                    tipo={campo.tipo}
                                    readOnly={campo.readOnly}
                                    onValorChange={(novoValor) => handleFieldUpdate(campo.campo, novoValor)}
                                />
                            ))}

                        </div>

                        {}
                        <div className="col-12 col-md-4 d-flex flex-column align-items-md-end align-items-start mt-4 mt-md-0">
                            
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
                            
                        </div>
                    </div>
                </div>
            </div>
            
            {}
            <MenuNavegacao />
        </div>
    );
}