const API_BASE_URL = 'http://localhost:8080/api';
const formatarDataParaAPI = (dataString) => {
    if (!dataString || dataString.length !== 10 || dataString === 'DD/MM/AAAA') return null;
    
    try {
        const dataFormatada = dataString.replace(/\//g, '-'); 
        
        return dataFormatada; 

    } catch (e) {
        console.error("Erro ao formatar data para API:", e);
        return null;
    }
};
const formatarDataParaFront = (dataAPI) => {
    if (!dataAPI) return "DD-MM-YYYY";
    try {
        const [ano, mes, dia] = dataAPI.split('T')[0].split('-');
        return `${dia}-${mes}-${ano}`; 
    } catch (e) {
        return "DD-MM-YYYY";
    }
};

export const cadastrarUsuario = async (novoUsuario) => {
    const payload = {
        ...novoUsuario,
        dataNascimento: formatarDataParaAPI(novoUsuario.dataNascimento) 
    };
    
    console.log(`[Service] Enviando POST para /usuarios com payload:`, payload); 
    
    const response = await fetch(`${API_BASE_URL}/usuarios`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        try {
             const errorBody = await response.json();
             throw new Error(errorBody.mensagem || `Erro ${response.status}: Falha ao cadastrar.`);
        } catch (e) {
             throw new Error(`Erro ${response.status}: Falha de rede ou servidor.`);
        }
    }

    return response.json(); 
};

export const buscarUsuarioPorId = async (id) => {
    const response = await fetch(`${API_BASE_URL}/usuarios/${id}`);

    if (!response.ok) {
        throw new Error('Falha ao buscar dados do usuário. Código: ' + response.status);
    }

    const usuario = await response.json();
    usuario.dataNascimento = formatarDataParaFront(usuario.dataNascimento); 
    
    return usuario;
};
export const atualizarUsuario = async (id, usuarioAtualizado) => {
    const payload = {
        ...usuarioAtualizado,
        dataNascimento: formatarDataParaAPI(usuarioAtualizado.dataNascimento)
    };

    if (payload.senha === '********') {
        delete payload.senha; 
    }
    
    console.log(`[Service] Enviando PUT para /usuarios/${id} com payload:`, payload); 
    
    const response = await fetch(`${API_BASE_URL}/usuarios/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        try {
             const errorBody = await response.json();
             throw new Error(errorBody.mensagem || `Erro ${response.status}: Falha de sincronização.`);
        } catch (e) {
             throw new Error(`Erro ${response.status}: Falha de rede ou servidor.`);
        }
    }
    return response.json(); 
};