# FinBal Frontend

## Descrição
O **FinBal** é um projeto de interface web desenvolvido em **React.js**, **HTML**, **CSS** e **Bootstrap**, com o objetivo de permitir que os usuários controlem sua vida financeira com praticidade e organização.

---

## Estrutura de pastas

```
finbal-frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   ├── Logo-google.png
│   │   └── Logo.png
│   ├── components/
│   │   ├── Botao.jsx
│   │   ├── BotaoGoogle.jsx
│   │   ├── CabecalhoDashboardApp.jsx
│   │   ├── CabecalhoSimples.jsx
│   │   ├── CampoInput.jsx
│   │   ├── CampoPerfil.jsx
│   │   ├── CampoSelecao.jsx
│   │   ├── CardsDashboard.jsx
│   │   ├── MenuNavegacao.jsx
│   │   └── Rodape.jsx
│   ├── pages/
│   │   ├── Cadastro.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Login.jsx
│   │   ├── Metas.jsx
│   │   ├── PaginaInicial.jsx
│   │   ├── Perfil.jsx
│   │   └── SaldoInicial.jsx
│   ├── styles/
│   │   └── styles-global.css
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

---

## Tecnologias Utilizadas
- **React.js**
- **HTML5**
- **CSS3**
- **Bootstrap 5**
- **Vite** (para build e ambiente de desenvolvimento)

---

## Como Executar o Projeto

1. **Clonar o repositório**
   ```bash
   git clone https://github.com/seuusuario/finbal-frontend.git
   ```

2. **Instalar as dependências**
   ```bash
   npm install
   ```

3. **Executar o projeto**
   ```bash
   npm run dev
   ```

4. **Acessar o app**
   Abra [http://localhost:5173](http://localhost:5173) no navegador.

5. **Usuario teste para Acessar o app**
email: netuno.cachorro@finbal.com
senha: ********

---

## Estilos Globais

O arquivo `styles-global.css` contém as definições padrão de cores e tipografia utilizadas em todo o projeto, com base nas especificações do Figma:

```css
:root {
  --color-background: linear-gradient(0deg, #141C26, #141C26),
                      linear-gradient(180deg, #000000 -14.31%, #4167D9 79.12%);
  --color-primary: #4167D9;
  --color-text: #FFFFFF;

  --font-main: 'Inter', sans-serif;
  --font-weight-regular: 400;
}
```

---

## Autoras
- **Elise Oliveira**
- **Lais Sallas**
- **Gabrielli Martinelli**

---

## Licença
Projeto desenvolvido para fins acadêmicos — todos os direitos reservados © 2025.
