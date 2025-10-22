// src/components/Botao.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Recebe props com nomes em pt-br: texto, estilo (tipo de botão), e funcaoClick (ação)
export default function Botao({ texto, estilo, funcaoClick }) {
  
  // Define o estilo padrão do Bootstrap (padding e formato arredondado)
  let classes = 'btn fw-bold px-5 py-3 rounded-pill';
  let estilosCustomizados = {};

  if (estilo === 'destaque') {
    // Botão de Destaque (Abra sua conta): azul sólido #3B6CFF
    classes += ' btn-primary';
    estilosCustomizados = {
        backgroundColor: 'var(--cor-destaque)',
        borderColor: 'var(--cor-destaque)',
    };
  } else if (estilo === 'secundario') {
    // Botão Secundário (Acesse sua conta): contorno branco
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
      onClick={funcaoClick} // Executa a função recebida via prop
    >
      {texto}
    </button>
  );
}