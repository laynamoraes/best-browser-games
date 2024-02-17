import "./styles.css"

export default function Input(props) {
  return (
    <input
      placeholder={props.placeholder}
      className="input-generic"
      type="text"
      name={props.name}
      id={props.id}
      value={props.value}
    />
  )
}
