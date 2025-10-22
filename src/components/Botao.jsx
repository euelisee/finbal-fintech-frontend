import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Botao({ texto, estilo, funcaoClick }) {
  
  let classes = 'btn fw-bold px-5 py-3 rounded-pill';
  let estilosCustomizados = {};

  if (estilo === 'destaque') {
    classes += ' btn-primary';
    estilosCustomizados = {
        backgroundColor: 'var(--cor-destaque)',
        borderColor: 'var(--cor-destaque)',
    };
  } else if (estilo === 'secundario') {
    classes += ' btn-outline-light';
    estilosCustomizados = {
        borderColor: 'var(--cor-branco)',
        color: 'var(--cor-branco)',
    };
  }
  
  return (
    <button 
      className={classes} 
      style={estilosCustomizados} 
      onClick={funcaoClick} 
    >
      {texto}
    </button>
  );
}