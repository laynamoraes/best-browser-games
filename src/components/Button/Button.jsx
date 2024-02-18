import "./styles.css"

export default function Button(props) {
  return (
    <button type={props.type} className="button-generic">{props.description}</button>
  )
}