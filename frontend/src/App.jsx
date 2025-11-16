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
      setResponse(data.message);
    } catch (err) {
      setResponse("Error connecting to backend");
      console.error(err);
    }
  }

    return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <button onClick={backendCall}>
        Call Backend
      </button>

      <div style={{ marginTop: "20px" }}>
        <textarea
          value={response}
          readOnly
          rows={6}
          cols={50}
          placeholder="Backend response will appear here..."
        />
      </div>
    </div>
  );
}


export default App
