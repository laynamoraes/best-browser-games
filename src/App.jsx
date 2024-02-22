import "./App.css"

import { GrClose } from "react-icons/gr"
import { RiGameFill } from "react-icons/ri"

import Input from "./components/Input/Input"
import Button from "./components/Button/Button"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function App() {
  const [showModalSignUp, setShowModalSignUp] = useState(false)
  const [showModalLogIn, setShowModalLogIn] = useState(false)
  const [errorLogin, setErrorLogin] = useState("")

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    date: "",
    state: "",
    country: "",
  })

  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
  })

  const createUser = (e) => {
    e.preventDefault()
    console.log(formData)

    fetch("http://localhost:3000/users", {
      body: new URLSearchParams(formData),
      method: "POST",
    })
      .then(
        (response) => console.log(response),

        // limpando os dados enviados
        setFormData({
          name: "",
          email: "",
          password: "",
          date: "",
          state: "",
          country: "",
        }),

        // limpando os inputs após o envio do form
        (document.getElementById("input-name").value = ""),
        (document.getElementById("input-email").value = ""),
        (document.getElementById("input-password").value = ""),
        (document.getElementById("input-date").value = ""),
        (document.getElementById("input-state").value = ""),
        (document.getElementById("input-country").value = ""),
        setShowModalSignUp(false),

        alert("Cadastro criado com sucesso!")
      )
      .catch((error) => console.error(error))
  }

  const loginUser = (e) => {
    e.preventDefault()
    console.log(dataLogin)

    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => {
        data.map((user) => {
          if (
            user.email === dataLogin.email &&
            user.password === dataLogin.password
          ) {
            navigate("/logged")

            console.log("Login feito com sucesso!")
            setErrorLogin("")

            setDataLogin({
              email: "",
              password: "",
            })

            document.getElementById("input-email-user").value = ""
            document.getElementById("input-password-user").value = ""
          }
        })
      })
      .catch(
        (error) => console.error(error),
        setErrorLogin("E-mail ou senha incorretos!")
      )
  }

  return (
    <>
      <nav className="navbar-container-home">
        <ul className="navbar-content">
          <li>
            <h1>
              <RiGameFill
                size={"30px"}
                style={{ verticalAlign: "text-bottom", paddingRight: "5px" }}
              />
              BestBrowserGames
            </h1>
          </li>
          <li className="buttons">
            <button
              className="button-sign-up"
              onClick={() => setShowModalSignUp(true)}
            >
              Sign up
            </button>
            <button
              className="button-log-in"
              onClick={() => setShowModalLogIn(true)}
            >
              Log in
            </button>
          </li>
        </ul>
      </nav>

      {showModalSignUp && (
        <div id="sign-up-modal" className="sign-up-modal">
          <form className="sign-up-modal-content" onSubmit={createUser}>
            <GrClose
              onClick={() => setShowModalSignUp(false)}
              size="20px"
              style={{
                cursor: "pointer",
                position: "absolute",
                top: "20px",
                right: "20px",
              }}
            />
            <h3>Sign up</h3>
            <div className="inputs-container">
              <Input
                placeholder="Nome completo"
                type="text"
                name="name"
                id="input-name"
                onChange={(event) =>
                  setFormData({ ...formData, name: event.target.value })
                }
              />
              <Input
                placeholder="E-mail"
                type="email"
                name="email"
                id="input-email"
                onChange={(event) =>
                  setFormData({ ...formData, email: event.target.value })
                }
              />
              <Input
                placeholder="Senha"
                type="password"
                name="password"
                id="input-password"
                onChange={(event) =>
                  setFormData({ ...formData, password: event.target.value })
                }
              />
              <Input
                placeholder="Data de nascimento"
                type="text"
                name="date"
                id="input-date"
                onChange={(event) =>
                  setFormData({ ...formData, date: event.target.value })
                }
              />
              <Input
                placeholder="Estado"
                type="text"
                name="state"
                id="input-state"
                onChange={(event) =>
                  setFormData({ ...formData, state: event.target.value })
                }
              />
              <Input
                placeholder="País"
                type="text"
                name="country"
                id="input-country"
                onChange={(event) =>
                  setFormData({ ...formData, country: event.target.value })
                }
              />
            </div>
            <Button description="Cadastrar" type="submit" />
          </form>
        </div>
      )}

      {showModalLogIn && (
        <div id="log-in-modal" className="log-in-modal">
          <form className="log-in-modal-content" onSubmit={loginUser}>
            <GrClose
              onClick={() => setShowModalLogIn(false)}
              size="20px"
              style={{
                cursor: "pointer",
                position: "absolute",
                top: "20px",
                right: "20px",
              }}
            />
            <h3>Log in</h3>
            <div className="inputs-container">
              {errorLogin && <p className="error-text">{errorLogin}</p>}
              <Input
                placeholder="E-mail"
                type="email"
                name="email"
                id="input-email-user"
                onChange={(event) =>
                  setDataLogin({ ...dataLogin, email: event.target.value })
                }
              />
              <Input
                placeholder="Senha"
                type="password"
                name="password"
                id="input-password-user"
                onChange={(event) =>
                  setDataLogin({ ...dataLogin, password: event.target.value })
                }
              />
            </div>
            <Button description="Entrar" type="submit" />
          </form>
        </div>
      )}
    </>
  )
}

export default App
