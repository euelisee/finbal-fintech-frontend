// src/components/CampoInput.jsx
import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

// ⭐️ NOVO: CampoInput aceita o prop 'icone'
export default function CampoInput({ rotulo, tipo, valor, aoMudar, placeholder, icone }) { 
  
  const [tipoInput, setTipoInput] = useState(tipo);
  const isPassword = tipo === 'password';

  const togglePasswordVisibility = () => {
    setTipoInput(tipoInput === 'password' ? 'text' : 'password');
  };

  const passwordIcon = tipoInput === 'password' ? 'bi-eye-slash' : 'bi-eye';
  
  const handleClickIcon = isPassword ? togglePasswordVisibility : null;

  // Define se o campo precisa de um ícone de "extensão"
  const precisaExtensao = isPassword || icone;

  return (
    <div className="mb-4">
      
      {/* Rótulo Sutil */}
      <p className="form-label text-uppercase fw-bold mb-1" style={{ fontSize: '0.75rem', color: '#343a40' }}>
        {rotulo}
      </p>

      <div className="input-group">
        
        <input 
          type={tipoInput} 
          // ⭐️ Ajuste de classe: removemos a borda direita se houver um ícone de extensão
          className={`form-control py-3 ${precisaExtensao ? 'border-end-0' : ''}`} 
          value={valor}
          onChange={(e) => aoMudar(e.target.value)}
          required
          placeholder={placeholder} 
        />

        {/* ⭐️ CHAVE: Renderiza o ícone de Olho (Senha) OU o ícone de Calendário (Data) ⭐️ */}
        {precisaExtensao && (
          <span 
            className="input-group-text bg-white border-start-0"
            // Adiciona cursor: pointer apenas se for o ícone de senha
            style={{ cursor: isPassword ? 'pointer' : 'default', color: '#6c757d' }}
            onClick={handleClickIcon} // O clique só é funcional para senha
          >
            {/* Usa o ícone da senha, ou o ícone passado via prop (calendário) */}
            <i className={`bi ${isPassword ? passwordIcon : icone}`}></i>
          </span>
        )}
      </div>
    </div>
  );
}