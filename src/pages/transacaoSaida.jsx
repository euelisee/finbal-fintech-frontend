import React, { useState, useEffect } from 'react';
import { data, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/styles-global.css'; 
import Transacao from '../components/Transacao';
import CabecalhoDashboardApp from '../components/CabecalhoDashboardApp';
import { criarTransacao } from '../services/transacaoService';

export default function TransacaoSaida() {
    const handleSubmit = async (dados) => {
        const valorNumerico = Number(dados.valor);
            
        const partes = dados.data.split("-");
        const dataFormatada = `${partes[2]}-${partes[1]}-${partes[0]}`;
    try {
      const payload = {
        tipo: "DESPESA", 
        valor: valorNumerico,
        categoria: dados.categoria.toUpperCase(), 
        data: dataFormatada,
        contaId: 1, 
      };

      await criarTransacao(payload);
      alert("Transação registrada com sucesso!");
    } catch (error) {
      alert("Erro ao salvar transação!");
      console.error(error);
    }
  };

    return (
        <>
        <div className='transacao-header' >
        <CabecalhoDashboardApp /></div>
        <Transacao
            tipo="saida"
            cor="#F44336" 
            onSubmit={handleSubmit}
        />
        </>
    );

}