import {useState} from 'react'
import Greetings from './components/Greetings'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

const App = () => {
  const [languageGreetingArray, setLanguageGreetingArray] = useState(
    languageGreetingsList[0],
  )
  const passLanguageGreeting = id => {
    const filterArray = languageGreetingsList.find(
      eachList => eachList.id === id,
    )
    setLanguageGreetingArray(filterArray)
    console.log(languageGreetingArray)
  }
  return (
    <div className="bg-container">
      <h1 className="greetings-heading">Multilingual Greetings</h1>
      <ul className="un-order-list">
        {languageGreetingsList.map(eachGreetingArray => (
          <Greetings
            passId={passLanguageGreeting}
            key={eachGreetingArray.id}
            eachArray={eachGreetingArray}
            isActive={eachGreetingArray.id === languageGreetingArray.id}
          />
        ))}
      </ul>
      <img
        src={languageGreetingArray.imageUrl}
        alt={languageGreetingArray.imageAltText}
        className="img-size"
      />
    </div>
  )
}

export default App
