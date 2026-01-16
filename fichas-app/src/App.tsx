import { useState } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Fichas RPG</h1>
      <p>Comece a programar aqui!</p>
      <p>Use os tipos em src/types/index.ts</p>
      <p>Use os serviços em src/services/</p>
    </div>
  )
}

export default App
