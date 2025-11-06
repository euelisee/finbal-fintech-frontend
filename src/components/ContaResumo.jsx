import { useEffect, useState } from "react";
import { buscarContaPorId } from "../services/contaService";
import { listarTransacoes } from "../services/transacaoService";
import { Card } from "../components/CardsDashboard";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { AcaoIcone } from "../components/CardsDashboard";
import "../styles/styles-global.css";

export default function ContaResumo() {
  const [saldoConta, setSaldoConta] = useState(0);
  const [entradas, setEntradas] = useState(0);
  const [saidas, setSaidas] = useState(0);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function fetchDadosConta() {
      try {
        
        const conta = await buscarContaPorId(1);
        if (!conta || conta.saldo === undefined) {
          throw new Error("Não foi possível obter o saldo da conta");
        }
        setSaldoConta(conta.saldo);

        
        const transacoes = await listarTransacoes();

        if (transacoes && transacoes.length > 0) {
          let totalEntradas = 0;
          let totalSaidas = 0;

          transacoes.forEach((t) => {
            if (t.tipo === "RECEITA") totalEntradas += t.valor;
            if (t.tipo === "DESPESA") totalSaidas += t.valor;
          });

          setEntradas(totalEntradas);
          setSaidas(totalSaidas);
        }
      } catch (error) {
        setErro(error.message);
      }
    }

    fetchDadosConta();
  }, []);

  if (erro) {
    return <p>Erro ao carregar dados: {erro}</p>;
  }

  const alturaCardConta = "310px";

  return (
    <Card
      titulo="SUA CONTA"
      valor={`R$ ${saldoConta.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
      })}`}
      tipo="principal"
      style={{ height: alturaCardConta}}
    >
      <div className="d-flex justify-content-center mt-4">
        { }
        <div className="text-center mx-5">
          <p
            className="fw-bold mb-0"
            style={{ color: "var(--cor-sucesso)", fontSize: "1rem" }}
          >
            ↑ Entradas
          </p>
          <p
            className="fw-bold mb-0"
            style={{ color: "var(--cor-sucesso)", fontSize: "1.3rem" }}
          >
            R${" "}
            {entradas.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}
          </p>
        </div>

        {/* Saídas */}
        <div className="text-center mx-5">
          <p
            className="fw-bold mb-0"
            style={{ color: "var(--cor-perigo)", fontSize: "1rem" }}
          >
            ↓ Saídas
          </p>
          <p
            className="fw-bold mb-0"
            style={{ color: "var(--cor-perigo)", fontSize: "1.3rem" }}
          >
            R${" "}
            {saidas.toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}
          </p>
        </div>

      </div>

       {/* Ícones de ação dentro do card */}
  <div className="d-flex justify-content-center pt-4 mt-5">
    <AcaoIcone icone="bi-file-earmark-text" texto="Contas a pagar" />
    <AcaoIcone icone="bi-journal-text" texto="Extrato" />
    <AcaoIcone icone="bi-bar-chart-line" texto="Gráficos" />
  </div>
    </Card>
  );
}
