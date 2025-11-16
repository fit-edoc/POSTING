import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GlassButton from './Buttons/GlassButton'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <h1 className='text-center bg-white'> fit-edoc</h1>
  <GlassButton/>
  </>
  )
}

export default App
