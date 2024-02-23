import "./styles.css"
import { useEffect, useState } from "react"
import { RiGameFill } from "react-icons/ri"
import CardGame from "../../components/CardGame/CardGame"
import IconUser from "../../components/IconUser/IconUser"
import Pagination from "../../components/Pagination/Pagination"
import Footer from "../../components/Footer/Footer"

export default function Logged() {
  const [dataGames, setDataGames] = useState([])
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(8)
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch(
      `http://localhost:3000/games?_page=${page}&_limit=12&name_like=${search}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setDataGames(data)
      })
      .catch((error) => console.error(error))
  }, [page, search])

  function firstPage() {
    setPage(1)
  }

  function previousPage() {
    if (page - 1 <= 0) {
      return
    }

    setPage(page - 1)
  }

  function nextPage() {
    if (page + 1 > pages) {
      return
    }

    setPage(page + 1)
  }

  function lastPage() {
    setPage(pages)
  }

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
            <input
              type="text"
              placeholder="Search"
              name=""
              id="input-search"
              onChange={(event) => setSearch(event.target.value)}
            />
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

      <Pagination
        totalItems={12 * pages}
        currentPage={page}
        totalPages={pages}
        firstPage={firstPage}
        previousPage={previousPage}
        nextPage={nextPage}
        lastPage={lastPage}
        disabledFirstPage={page - 1 <= 0}
        disabledPrevioustPage={page - 1 <= 0}
        disabledNextPage={page + 1 > pages}
        disabledLastPage={page + 1 > pages}
      />

      <Footer />
    </div>
  )
}
