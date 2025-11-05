import React from "react";
import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const MenuIcone = ({ icone, rota, ativo }) => {
  const corAtivo = ativo ? "var(--cor-destaque)" : "var(--cor-cinza-claro)";

  return (
    <Link
      to={rota}
      className="text-center"
      style={{ width: "auto", color: corAtivo }}
    >
      <i className={`bi ${icone}`} style={{ fontSize: "1.5rem" }}></i>
    </Link>
  );
};

export default function MenuNavegacao() {
  const [menuAberto, setMenuAberto] = useState(false);

  const handleToggleMenu = () => {
    setMenuAberto(!menuAberto);
  };
  return (
    <div
      className="fixed-bottom p-3 d-flex justify-content-center"
      style={{
        padding: 0,
        backgroundColor: "transparent",
      }}
    >
      <div
        className="menu-navegacao-fixo"
        style={{
          maxWidth: "500px",
          width: "95%",
          borderRadius: "20px",
          boxShadow: "0 0 10px rgba(0,0,0,0.5)",
          marginBottom: "10px",
          padding: "1rem 20px",
          borderTop: "none",
        }}
      >
        <div className={`botoes-flutuantes ${menuAberto ? "ativo" : ""}`}>
          <Link to="/transacao-entrada" className="btn-entrada-flutuante">
            <i className="bi bi-arrow-up-circle"></i>
          </Link>

          <Link to="/transacao-saida" className="btn-saida-flutuante">
            <i className="bi bi-arrow-down-circle"></i>
          </Link>
        </div>

        <div className="d-flex justify-content-around align-items-center">
          <MenuIcone icone="bi-house-fill" rota="/dashboard" ativo={true} />
          <MenuIcone icone="bi-search" rota="/buscar" ativo={false} />

          <button
            className="btn shadow btn-flutuante-menu"
            onClick={() => console.log(handleToggleMenu())}
            style={{
              margin: "0 2rem",
            }}
          >
            <i
              className="bi bi-plus"
              style={{ fontSize: "2.5rem", color: "white" }}
            ></i>
          </button>

          <MenuIcone
            icone="bi-arrow-left-right"
            rota="/transferir"
            ativo={false}
          />
          <MenuIcone icone="bi-wallet2" rota="/carteira" ativo={false} />
        </div>
      </div>
    </div>
  );
}
