import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Rodape() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="text-center py-3" style={{ 
      backgroundColor: 'transparent', 
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      marginTop: 'auto' 
    }}>
      <p className="mb-0" style={{ color: 'var(--cor-cinza-claro)', fontSize: '0.9rem' }}>
        &copy; {anoAtual} FinBal. Todos os direitos reservados.
      </p>
    </footer>
  );
}