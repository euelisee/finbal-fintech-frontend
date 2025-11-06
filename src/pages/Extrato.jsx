import { useEffect, useState } from "react";
import { listarTransacoes } from "../services/transacaoService";
import "../styles/styles-global.css";
import CabecalhoSimples from "../components/CabecalhoSimples";
import ContaResumo from "../components/ContaResumo";

export default function Extrato() {
  const [transacoes, setTransacoes] = useState([]);
  const [erro, setErro] = useState(null);
  const [saldoAtual, setSaldoAtual] = useState(0);



  useEffect(() => {
    async function fetchTransacoes() {
      try {
        const data = await listarTransacoes();
        setTransacoes(data);

        // Pega o saldo real da conta da primeira transação
        if (data.length > 0 && data[0].conta?.saldo !== undefined) {
          setSaldoAtual(data[0].conta.saldo);
        }
      } catch (error) {
        setErro(error.message);
      }
    }

    fetchTransacoes();
  }, []);

  if (erro) {
    return <p>Erro ao carregar transações: {erro}</p>;
  }

  if (!transacoes.length) {
    return <p>Carregando transações...</p>;
  }

  // --- Agrupar as transações por data ---
  const transacoesPorData = transacoes.reduce((acc, transacao) => {
    const data = transacao.data;
    if (!acc[data]) acc[data] = [];
    acc[data].push(transacao);
    return acc;
  }, {});

  // --- Ordenar as datas do mais recente para o mais antigo ---
  const datasOrdenadas = Object.keys(transacoesPorData).sort((a, b) => {
    const [diaA, mesA, anoA] = a.split("-").map(Number);
    const [diaB, mesB, anoB] = b.split("-").map(Number);
    return new Date(anoB, mesB - 1, diaB) - new Date(anoA, mesA - 1, diaA);
  });

  // --- Calcular saldo diário retroativo ---
  let saldoCorrente = saldoAtual;
  const saldoPorData = {};

  datasOrdenadas.forEach((data) => {
    const transacoesDoDia = transacoesPorData[data];
    let somaDia = 0;

    transacoesDoDia.forEach((t) => {
      if (t.tipo === "RECEITA") somaDia += t.valor;
      else if (t.tipo === "DESPESA") somaDia -= t.valor;
    });

    saldoPorData[data] = saldoCorrente;
    saldoCorrente -= somaDia; // retrocede o saldo para o dia anterior
  });

  return (
    <>
     <div className="transacao-header">
            <CabecalhoSimples />
          </div>
          <div className="transacao-resumo"><ContaResumo/></div>
    <div className="container-extrato">
      <h2 className="titulo-extrato">Extrato</h2>

      {datasOrdenadas.map((data) => (
        <div key={data} className="bloco-data">
          <div className="cabecalho-data">
            <span>{data}</span>
            <span className="saldo-data">
              Saldo: R$ {saldoPorData[data].toFixed(2)}
            </span>
          </div>

          {transacoesPorData[data].map((t) => (
            <div key={t.id} className="linha-movimentacao">
              <p className="nome-movimentacao">{t.categoria}</p>
              <p
                className="valor-movimentacao"
                style={{
                  color: t.tipo === "RECEITA" ? "#4caf50" : "#f44336",
                }}
              >
                {t.tipo === "RECEITA" ? "+" : "-"} R$ {t.valor.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div> </>
  );
}
