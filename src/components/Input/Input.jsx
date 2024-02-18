import "./styles.css"

export default function Input(props) {
  return (
    <input
      placeholder={props.placeholder}
      className="input-generic"
      type={props.type}
      name={props.name}
      id={props.id}
      onChange={props.onChange}
      required
    />
  )
}
