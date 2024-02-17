import "./styles.css"

export default function Button(props) {
  return (
    <button className="button-generic">{props.description}</button>
  )
}