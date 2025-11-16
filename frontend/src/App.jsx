import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const backendCall = async() => {
    try {
      const res = await fetch(backend + "/api/hello");
      const data = await res.text();
      setResponse(JSON.stringify(data))
    } catch (err) {
      setResponse("Error connecting to backend");
      console.error(err);
    }
  }
  return (
    
  )
}

export default App
