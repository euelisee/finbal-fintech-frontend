const API_URL = "http://localhost:8080/api/transacoes";

export async function criarTransacao(transacaoData) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transacaoData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Erro ao registrar transação");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao registrar transação:", error.message);
    throw error;
  }
}

export async function listarTransacoes() {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Erro ao buscar transações");
    }

    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar transações:", error.message);
    throw error;
  }
}
