import React from 'react';

export default function CampoSelecao({ rotulo, valor, aoMudar, opcoes }) {
    
    return (
        <div className="mb-4"> {}
            
            {}
            <p className="form-label text-uppercase fw-bold mb-1" style={{ fontSize: '0.75rem', color: '#343a40' }}>
                {rotulo}
            </p>
            
            <div className="input-group">
                <select
                    className="form-select py-3" 
                    value={valor}
                    onChange={(e) => aoMudar(e.target.value)}
                    style={{ backgroundColor: 'white' }}
                >
                    {opcoes.map((opcao) => (
                        <option key={opcao.valor} value={opcao.valor}>
                            {opcao.texto}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}