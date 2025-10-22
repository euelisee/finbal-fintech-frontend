import React, { useState, useEffect } from 'react';
import CampoInput from './CampoInput.jsx'; 
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function CampoPerfil({ rotulo, valorInicial, tipo = 'text', readOnly = false, onValorChange }) {
    
    const [valor, setValor] = useState(valorInicial);
    const [isEditing, setIsEditing] = useState(false);
    
    const corDestaque = 'var(--cor-destaque)'; 
    
    useEffect(() => {
        setValor(valorInicial);
    }, [valorInicial]);
    
    const handleInputChange = (novoValor) => {
        setValor(novoValor);
    };
    const handleSave = () => {
        if (!onValorChange || valor === valorInicial) {
            setIsEditing(false); 
            return;
        }
        onValorChange(valor);
        setIsEditing(false);
    };

    const handleEditClick = () => {
        if (isEditing) {
            handleSave();
        } else if (!readOnly) {
            setIsEditing(true);
        }
    };
    
    const estiloBotao = {
        backgroundColor: 'transparent',
        border: 'none',
        color: corDestaque,
        fontSize: '1.2rem',
        cursor: readOnly ? 'default' : 'pointer',
        
        position: 'absolute',
        top: '60%', 
        right: '-35px', 
        transform: 'translateY(-50%)', 
        
        zIndex: 10, 
        padding: '0 5px',
        height: '45px',
        display: 'flex',
        alignItems: 'center',
        opacity: readOnly ? 0.4 : 1, 
    };
    
    const iconeBotao = isEditing ? 'bi-check-lg' : 'bi-pencil-fill';

    return (
        <div className="mb-3" style={{ position: 'relative' }}> 
            {}
            <CampoInput
                rotulo={rotulo}
                tipo={tipo}
                valor={isEditing ? valor : valorInicial} 
                aoMudar={handleInputChange} 
                readOnly={!isEditing || readOnly} 
                estiloRotulo={{ color: '#3c4043' }} 
                estiloInput={{
                    color: '#000000', 
                    borderColor: isEditing ? corDestaque : '#ced4da', 
                    backgroundColor: 'transparent',
                    paddingRight: '40px',
                }}
            />
            
            {}
            {!readOnly && ( 
                <button
                    onClick={handleEditClick} 
                    style={estiloBotao}
                >
                    <i className={`bi ${iconeBotao}`}></i>
                </button>
            )}
        </div>
    );
}