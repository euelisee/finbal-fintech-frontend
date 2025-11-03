import React, { useState, useEffect, use } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../styles/styles-global.css';

import CabecalhoDashboardApp from "../components/CabecalhoDashboardApp.jsx";
import MenuNavegacao from "../components/MenuNavegacao.jsx";


import {
    criarConta,
    atualizarConta,
    deletarConta,
    buscarContaPorId
} from '../services/contaService.js';

const FormularioConta = ({ initialData, onSave, onCancel, isEditMode }) => {

    const [formData, setFormData] = useState(initialData || { numero: '', saldo: '', tipo: '' });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };
    return (
        <form onSubmit={handleSubmit} className="form-edicao d-grid gap-3">
            <small>{isEditMode ? 'EDITAR CONTA' : 'ADICIONAR CONTA'}</small>
            <input
                className="form-control form-control-lg"
                placeholder="Número da conta"
                name="numero"
                value={formData.numero}
                onChange={handleChange}
            />
            <input
                className="form-control form-control-lg"
                placeholder="Saldo (R$)"
                name="saldo"
                value={formData.saldo}
                onChange={handleChange}
            />
            <input
                className="form-control form-control-lg"
                placeholder="Tipo da conta"
                name="tipo"
                value={formData.tipo}
                onChange={handleChange}
            />
            <button type="submit" className="btn-atualizar btn btn-primary btn-lg">
                {isEditMode ? 'Atualizar' : 'Cadastrar'}
            </button>
            <button type="button" onClick={onCancel} className="btn btn-secondary btn-lg">
                Cancelar
            </button>
        </form>
    );
};


export default function Conta() {

    const [accountId, setAccountId] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [hasAccount, setHasAccount] = useState(false);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [error, setError] = useState(null);
    const [accountData, setAccountData] = useState({
        numero: '',
        saldo: '',
        tipo: ''
    });

    useEffect(() => {
        const loadAccount = async () => {
            const userIdSimulado = 1;
            try {
                const conta = await buscarContaPorId(userIdSimulado);
                if (conta) {
                    const contaReal = Array.isArray(conta) ? conta[0] : conta;
                    const dadosMapeados = {
                        id: contaReal.id,
                        numero: contaReal.numeroConta,
                        saldo: contaReal.saldo,
                        tipo: contaReal.tipoConta,
                    };
                    setAccountData(dadosMapeados);
                    setHasAccount(true);
                    setAccountId(dadosMapeados.id);
                } else {
                    setHasAccount(false);
                }
            } catch (err) {
                console.error('Falha ao carregar a conta:', err);
                setError('Erro ao carregar a conta. Tente novamente.');
            } finally {
                setIsLoading(false);
            }
        };
        loadAccount();
    }, []);


    const handleOpenEditForm = () => {
        setIsEditing(true);
        setIsAdding(false);
    }

    const handleUpdate = async (updatedData) => {
        if (!accountId || !isEditing) return;

        const dadosParaAPI = {
            id: accountId,
            numeroConta: updatedData.numero,
            saldo: parseFloat(updatedData.saldo) || 0,
            tipoConta: updatedData.tipo,
        }
        try {
            const contaAtualizada = await atualizarConta(accountId, dadosParaAPI);
            const dadosMapeados = {
                id: contaAtualizada.id,
                numero: contaAtualizada.numeroConta,
                saldo: contaAtualizada.saldo,
                tipo: contaAtualizada.tipoConta,
            }
            console.log('Conta atualizada com sucesso:', dadosMapeados);
            setAccountData(dadosMapeados);
            setIsEditing(false);
            setError(null);
        } catch (err) {
            console.error('Erro ao atualizar a conta:', err);
            setError(`Falha ao atualizar a conta: ${err.message}`);
        }
    }


    const handleCancelEdit = () => {
        setIsEditing(false);
    }

    const handleOpenConfirmation = () => {
        setShowConfirmation(true);
    };

    const handleCancelDelete = () => {
        setShowConfirmation(false);
    };

    const handleConfirmationDelete = async () => {
        if (!accountId) return;
        try {
            await deletarConta(accountId);
            console.log("Conta excluída com sucesso.");
            setHasAccount(false);
            setAccountData({ numero: '', saldo: '', tipo: '' });
            setAccountId(null);
            setShowConfirmation(false);
            setIsEditing(false);
            setError(null);
        } catch (err) {
            console.error('Erro ao excluir a conta:', err);
            setError(`Falha ao excluir a conta: ${err.message}`);
        }
    };

    const handleOpenAddForm = () => {
        setIsAdding(true);
        setIsEditing(false);
    }

    const handleCadastro = async (newData) => {
        const userIdSimulado = 21;
        const dadosParaAPI = {
            numeroConta: newData.numero || '',
            saldo: parseFloat(newData.saldo) || 0,
            tipoConta: newData.tipo || '',
            idUsuario: userIdSimulado,
        };
        if (isNaN(dadosParaAPI.saldo)) {
            setError('O campo Saldo deve ser um número válido.');
            return;
        }
        try {
            const contaCadastrada = await criarConta(dadosParaAPI);
            const dadosMapeados = {
                id: contaCadastrada.id,
                numero: contaCadastrada.numeroConta,
                saldo: contaCadastrada.saldo,
                tipo: contaCadastrada.tipoConta,
            };
            console.log('Conta cadastrada com sucesso:', dadosMapeados);
            setAccountData(dadosMapeados);
            setAccountId(dadosMapeados.id);
            setHasAccount(true);
            setIsAdding(false);
            setError(null);
        } catch (err) {
        }
    };

    const handleCancelAdd = () => {
        setIsAdding(false);
    };


    if (isAdding) {
        return (
            <div className="container-contas container my-4">
                <CabecalhoDashboardApp />
                <div className="colunas row">
                    <div className="clouna-esquerda col">
                        <ContaSemDados />
                    </div>
                    <div className="clouna-direita col">
                        <FormularioConta
                            onSave={handleCadastro}
                            onCancel={handleCancelAdd}
                            isEditMode={false}
                        />
                    </div>
                </div>
                <MenuNavegacao />
            </div>
        );
    }


    if (isEditing) {
        return (
            <div className="container-contas container my-4">
                <CabecalhoDashboardApp />
                <div className="colunas row">
                    <div className="clouna-esquerda col">
                        <ContaComDados accountData={accountData} />
                    </div>

                    <div className="clouna-direita col">
                        <FormularioConta
                            initialData={accountData}
                            onSave={handleUpdate}
                            onCancel={handleCancelEdit}
                            isEditMode={true}
                        />
                    </div>
                </div>
                <MenuNavegacao />
            </div>
        );
    }

    return (
        <div className="cointainer-contas container my-4">
            <CabecalhoDashboardApp />
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}
            <div className="colunas row">
                <div className="clouna-esquerda col">
                    {hasAccount ? (
                        <ContaComDados accountData={accountData} />
                    ) : (
                        <ContaSemDados />
                    )}
                    <div className="saldo-conta text-center mb-4">

                        <div className="texto-informacoes">
                            <p>Nome: Nilo</p>
                            <p>E-mail: nilo.cachorro@finbal.com.br</p>
                            <p>Telefone: 11998765432</p>
                            <p>CPF: 32145678900</p>
                        </div>
                    </div>
                </div>
                <div className="clouna-direita col">
                    {hasAccount ? (
                        <div className="botoes-direita d-grid gap-2">
                            <h1 className="mb-4">Escolha o que fazer</h1>
                            <button onClick={handleOpenEditForm} type="button" className="fundo-btn btn btn-primary btn-lg mb-2 w-100">
                                Editar
                            </button>
                            <button onClick={handleOpenConfirmation} type="button" className="fundo-btn btn btn-danger btn-lg w-100">
                                Excluir Conta
                            </button>
                        </div>
                    ) : (
                        <div className="botoes-direita d-grid gap-2">
                            <button onClick={handleOpenAddForm} type="button" className="fundo-btn btn btn-success btn-lg">
                                Adicionar conta
                            </button>
                        </div>
                    )}
                    {showConfirmation && (
                        <div style={modalOverlayStyle}>
                            <div style={modalContentStyle} >
                                <h4>Confirmação de Exclusão</h4>
                                <p>Tem certeza de que deseja excluir esta conta permanentemente?</p>
                                <div className="mt-3 d-flex justify-content-end gap-2">
                                    <button onClick={handleCancelDelete} className="btn btn-secondary">Cancelar</button>
                                    <button onClick={handleConfirmationDelete} className="btn btn-danger">Sim, Excluir</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <MenuNavegacao />
        </div >
    );
}


const ContaSemDados = () => (
    <>
        <div className="saldo-conta text-center mb-4">
            <small className="text-muted">Saldo</small>
            <h1 className="display-4 fw-bold text-primary" id="saldoDisplay">R$0,00</h1>
        </div>
        <div className="conta-conta text-center mb-4">
            <small className="text-muted">Informações</small>
            <div className="texto-conta">Nenhuma conta cadastrada</div>
        </div>
    </>
);

const ContaComDados = ({ accountData }) => {
    const saldoFormatado = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(accountData.saldo || 0);

    return (
        <>
            <div className="saldo-conta text-center mb-4">
                <small className="text-muted">Saldo</small>
                <h1 className="display-4 fw-bold text-primary" id="saldoDisplay">{saldoFormatado}</h1>
            </div>
            <div className="conta-conta text-center mb-4">
                <small className="text-muted">Informações</small>
                <div className="texto-conta">
                    <h1 className="texto-dois">Número: {accountData.numero}</h1>
                    <h1 className="text-white">Tipo: {accountData.tipo}</h1>
                </div>
            </div>
        </>
    );
};

const modalOverlayStyle = {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    zIndex: 1000
};

const modalContentStyle = {
    backgroundColor: '#141c26', padding: '30px', borderRadius: '8px',
    width: '90%', maxWidth: '400px',
    boxShadow: '0 0px 8px rgba(255, 255, 255, 0.39)'
};