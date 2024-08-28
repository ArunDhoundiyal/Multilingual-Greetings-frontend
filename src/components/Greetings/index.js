import './index.css'

const Greetings = ({eachArray, passId, isActive}) => {
  const {id, buttonText} = eachArray
  const onClickButton = () => {
    passId(id)
  }
  const color = isActive ? 'style-button' : ''
  return (
    <button
      aria-label={`${id}-${buttonText} button`}
      type="button"
      className={`style-greetings-button ${color}`}
      onClick={onClickButton}
    >
      <li>{buttonText}</li>
    </button>
  )
}

export default Greetings
