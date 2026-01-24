import { useState } from 'react'
import './App.css';

const user = {
  name: "zuki"
}

function App() {
  return (
    <div>
      <h1>
        Hello World {user.name}<br></br>
        <button className='avatar'>Click me</button>
      </h1>
    </div>
  )
}

export default App
