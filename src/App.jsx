import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <h1 className="text-3xl font-bold underline text-red-700">
      Hello world!
    </h1>
    <button className="btn btn-accent">Accent</button>
    </div>
  )
}

export default App
