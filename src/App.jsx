import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const languageContent = {
    en : {
        title: "Hello",
        content: "How are you?"
    } , 
    fr : {
        title: "Bonjour",
        content: "Comment ça va?"
    }
}

function App() {
  const [count, setCount] = useState(0)
  const [lang, setLang] = useState('en');

  return (
    <>
      <button onClick={() =>setLang('en')}>EN</button>
      <button onClick={() => setLang('fr')}>FR</button>
      <h1>{languageContent[lang].title}</h1>
      <p>{languageContent[lang].content}</p>
    </>
  )
}

export default App
