import React, { useState } from "react";
import "../styles/styles-global.css";
import { Link } from "react-router-dom";

export default function Transacao({ tipo, cor, onSubmit }) {
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [data, setData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ valor, categoria, data, tipo });
  };

  return (
    <main className="transacao-page">
      <section className="transacao">
        <div className="cabecalho-transacao">
          <Link to={"/dashboard"} className="link-arrow">
            <i className="bi bi-arrow-left transacao-arrow"></i>
          </Link>
          <h2 className="titulo-transacao" style={{ color: cor }}>
            Adicionar {tipo === "entrada" ? "Entrada" : "Saída"}
          </h2>
        </div>

        <p>Qual valor?</p>
        <div
          style={{
            fontSize: "2rem",
            marginBottom: "1rem",
            marginLeft: "0.9rem",
          }}
        >
          R$
          <input
            type="number"
            step="0.01"
            placeholder="0,00"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            className="input-valor"
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <div className="campoForm">
              <select
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option value="" disabled>
                  Selecione a categoria
                </option>
                <option value="">Categoria</option>
                <option value="ALIMENTACAO">Alimentação</option>
                <option value="TRANSPORTE">Transporte</option>
                <option value="SAUDE">Saúde</option>
                <option value="LAZER">Lazer</option>
                <option value="EDUCACAO">Educação</option>
                <option value="MORADIA">Moradia</option>
                <option value="INVESTIMENTOS">Investimentos</option>
                <option value="RENDA_EXTRA">Renda Extra</option>
                <option value="VARIAVEIS">Variáveis</option>
                <option value="OUTROS">Outros</option>
              </select>
            </div>
            <div className="campoForm">
              <input
                type="date"
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn-transacao"
              style={{ backgroundColor: cor, color: "#fff" }}
            >
              Continuar
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
