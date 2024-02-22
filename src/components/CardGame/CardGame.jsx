import "./styles.css"

import Button from "../Button/Button"

export default function CardGame({ imageURL, name, description, category }) {
  return (
    <div className="card-game">
      <div className="image-container">
        <img src={imageURL} alt={`Imagem do jogo ${name}`} />
      </div>
      <div className="card-bottom">
        <div className="game-details">
          <h3>{name}</h3>
          <p>{description}</p>
          <p>
            <strong>Categoria:</strong> {category}
          </p>
          <div className="buttons-container">
            <Button description="Avaliar" />
            <Button description="Jogar" />
          </div>
        </div>
      </div>
    </div>
  )
}
