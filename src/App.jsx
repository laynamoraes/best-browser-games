import "./App.css"

import Input from "./components/Input/Input"
import Button from "./components/Button/Button"

function App() {
  return (
    <>
      <nav>
        <ul className="navbar-content">
          <li>
            <h1>BestBrowserGames</h1>
          </li>
          <li>
            <input type="text" placeholder="Search" name="" id="input-search" />
          </li>
          <li className="buttons">
            <button className="button-sign-up">Sign up</button>
            <button className="button-log-in">Log in</button>
          </li>
        </ul>
      </nav>

      <div className="sign-up-modal">
        <div className="sign-up-modal-content">
          <h3>Sign up</h3>
          <div className="inputs-container">
            <Input placeholder="Nome completo" name="name" id="input-name" />
            <Input placeholder="E-mail" name="email" id="input-email" />
            <Input placeholder="Senha" name="password" id="input-password" />
            <Input
              placeholder="Data de nascimento"
              name="date"
              id="input-date"
            />
            <Input placeholder="Estado" name="state" id="input-state" />
            <Input placeholder="País" name="country" id="input-country" />
          </div>
          <Button description="Cadastrar" />
        </div>
      </div>
    </>
  )
}

export default App
