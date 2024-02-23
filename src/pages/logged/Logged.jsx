import { useEffect, useState } from "react"
import CardGame from "../../components/CardGame/CardGame"
import IconUser from "../../components/IconUser/IconUser"
import "./styles.css"

import { RiGameFill } from "react-icons/ri"

export default function Logged() {
  const [dataGames, setDataGames] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetch(`http://localhost:3000/games?_page=${page}&_limit=12`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setDataGames(data)
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <div>
      <nav className="navbar-container-logged">
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
          <li>
            <input type="text" placeholder="Search" name="" id="input-search" />
          </li>
          <li>
            <IconUser letterUser={"L"} />
          </li>
        </ul>
      </nav>

      <div className="games-container">
        <main className="games-content">
          <h2>Melhores Jogos</h2>
          <div className="games-list">
            {dataGames.map((game) => (
              <CardGame
                key={game.id}
                id={game.id}
                imageURL={game.imageURL}
                name={game.name}
                description={game.description}
                category={game.category}
                urlGame={game.urlGame}
              />
            ))}
          </div>
        </main>
      </div>

      <div className="pagination-container">
        <div className="pagination-items">
          <p>12 de 50</p>
        </div>

        <p>Texto aqui</p>
      </div>

      <footer>Meu footer</footer>
    </div>
  )
}
