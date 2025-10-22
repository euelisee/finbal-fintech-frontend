import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function CampoInput({ rotulo, tipo, valor, aoMudar, placeholder, icone }) { 
  
  const [tipoInput, setTipoInput] = useState(tipo);
  const isPassword = tipo === 'password';
  const togglePasswordVisibility = () => {
    setTipoInput(tipoInput === 'password' ? 'text' : 'password');
  };
  const passwordIcon = tipoInput === 'password' ? 'bi-eye-slash' : 'bi-eye';
  const handleClickIcon = isPassword ? togglePasswordVisibility : null;
  const precisaExtensao = isPassword || icone;

  return (
    <div className="mb-4">
      
      {}
      <p className="form-label text-uppercase fw-bold mb-1" style={{ fontSize: '0.75rem', color: '#343a40' }}>
        {rotulo}
      </p>

      <div className="input-group">
        
        <input 
          type={tipoInput} 
          className={`form-control py-3 ${precisaExtensao ? 'border-end-0' : ''}`} 
          value={valor}
          onChange={(e) => aoMudar(e.target.value)}
          required
          placeholder={placeholder} 
        />

        {}
        {precisaExtensao && (
          <span 
            className="input-group-text bg-white border-start-0"
            style={{ cursor: isPassword ? 'pointer' : 'default', color: '#6c757d' }}
            onClick={handleClickIcon} 
          >
            {}
            <i className={`bi ${isPassword ? passwordIcon : icone}`}></i>
          </span>
        )}
      </div>
    </div>
  );
}