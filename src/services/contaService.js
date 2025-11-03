const CONTA_API_BASE_URL = 'http://localhost:8080/api/contas';

export const criarConta = async (contaData) => {
    try {
        const response = await fetch(CONTA_API_BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contaData)
        });
        if (!response.ok) {
            let errorMessage = 'Falha ao cadastrar a conta.';
            try {
                const errorData = await response.json();
                errorMessage = errorData.message || errorData.error || errorMessage;
            } catch (jsonError) {
                errorMessage = `Erro HTTP ${response.status}. Consulte os logs do servidor.`;
            }
            throw new Error(errorMessage);
        }
        return await response.json();
    } catch (error) {
        console.error('Erro ao criar conta: ', error);
        throw error;
    }
};

export const buscarContaPorId = async (id) => {
    try {
        const response = await fetch(`${CONTA_API_BASE_URL}/${id}`, {
            method: 'GET',
            headers: {
            },
        });
        if (response.status === 404) {
            return null;
        }
        if (!response.ok) {
            throw new Error('Falha ao buscar a conta.');
        }
        return await response.json();
    } catch (error) {
        console.error('Erro ao buscar conta: ', error);
        throw error;
    }
};

export const atualizarConta = async (id, contaData) => {
    try {
        const response = await fetch(`${CONTA_API_BASE_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contaData)
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Falha ao atualizar a conta.');
        }
        return await response.json();
    } catch (error) {
        console.error('Erro ao atualizar a conta: ', error);
        throw error;
    }
};

export const deletarConta = async (id) => {
    try {
        const response = await fetch(`${CONTA_API_BASE_URL}/${id}`, {
            method: 'DELETE',
            headers: {
            }
        });
        if (response.status === 404) {
            throw new Error('Erro ao excluir conta: Conta não encontrada.');
        }
        if (!response.ok) {
            throw new Error('Falha ao deletar a conta.');
        }
        return true;
    } catch (error) {
        console.error('Erro ao deletar conta: ', error);
        throw error;
    }
};