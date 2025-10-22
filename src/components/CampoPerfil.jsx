// src/components/CampoPerfil.jsx
import React, { useState } from 'react';
import CampoInput from './CampoInput.jsx'; 
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function CampoPerfil({ rotulo, valorInicial, tipo = 'text', readOnly = false, onValorChange }) {
    const [valor, setValor] = useState(valorInicial);
    const [isEditing, setIsEditing] = useState(false);
    
    const corDestaque = 'var(--cor-destaque)'; 

    const handleSave = () => {
        onValorChange(valor); 
        setIsEditing(false);
    };
    
    const handleEditClick = () => {
        if (readOnly) return; 
        
        if (isEditing) {
            handleSave();
        } else {
            setIsEditing(true);
        }
    };
    
    const handleInputChange = (novoValor) => {
        setValor(novoValor);
    };


    // Estilo do botão Lápis/Check
    const estiloBotao = {
        backgroundColor: 'transparent',
        border: 'none',
        color: corDestaque,
        fontSize: '1.2rem',
        cursor: readOnly ? 'default' : 'pointer',
        
        position: 'absolute',
        top: '60%', 
        // ⭐️ AJUSTE FINAL: Move o botão 20px para a direita (fora do input) ⭐️
        right: '-35px', 
        transform: 'translateY(-50%)', 
        
        zIndex: 10, 
        padding: '0 5px',
        height: '45px',
        display: 'flex',
        alignItems: 'center',
        opacity: readOnly ? 0.4 : 1, 
    };

    return (
        // Container com position: relative para aninhar o botão absoluto
        <div className="mb-3" style={{ position: 'relative' }}> 
            
            <CampoInput
                rotulo={rotulo}
                tipo={tipo}
                valor={valor}
                aoMudar={handleInputChange}
                readOnly={!isEditing || readOnly}
                estiloRotulo={{ color: '#3c4043' }} 
                estiloInput={{
                    color: '#000000', 
                    borderColor: isEditing ? corDestaque : '#ced4da', 
                    backgroundColor: 'transparent',
                    paddingRight: '40px', // Garante que o texto não vá para debaixo do ícone
                }}
            />
            
            {/* Lápis/Check Button */}
            <button
                onClick={handleEditClick}
                style={estiloBotao}
                disabled={readOnly && !isEditing}
            >
                <i className={`bi bi-${isEditing ? 'check-lg' : 'pencil'}`}></i>
            </button>
        </div>
    );
}