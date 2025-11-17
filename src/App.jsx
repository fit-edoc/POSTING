import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GlassButton from './Buttons/GlassButton'
import JioHotstar from './hotstar/JioHotstar'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>

  {/* <GlassButton/> */}
  <JioHotstar/>
  </>
  )
}

export default App
