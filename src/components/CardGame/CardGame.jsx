import React from "react"
import ReactStars from "react-rating-stars-component"
import { render } from "react-dom"
import "./styles.css"

export default function CardGame({
  id,
  imageURL,
  name,
  description,
  category,
  urlGame,
}) {
  const ratingChanged = (newRating) => {
    const idCard = id
    console.log(newRating, idCard)
  }

  return (
    <div className="card-game">
      <div className="image-container">
        <img src={imageURL} alt={`Imagem do jogo ${name}`} />
      </div>
      <div className="card-bottom">
        <div className="game-details">
          <h3>{name}</h3>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
          <p>{description}</p>
          <p>
            <strong>Categoria:</strong> {category}
          </p>
          <div className="buttons-container">
            <button className="button-rate">Avaliar</button>
            <a href={urlGame} target="_blank">
              <button className="button-play">Jogar</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
