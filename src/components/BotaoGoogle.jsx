// src/components/BotaoGoogle.jsx
import React from 'react';
import logoGoogle from '../assets/Logo-google.png'; 

export default function BotaoGoogle() {
    return (
        <button 
            className="btn btn-outline-secondary btn-google-custom w-100"
            onClick={() => console.log('Login com Google')}
            style={{ 
                height: '50px',
                borderColor: 'var(--cor-cinza-claro)',
                backgroundColor: 'white',
                color: '#3c4043', 
                fontSize: '1rem'
            }}
        >
            <img 
                src={logoGoogle} 
                alt="Google G" 
                style={{ width: '18px', height: '18px', marginRight: '8px' }}
            />
            Continue com o Google
        </button>
    );
}