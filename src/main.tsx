import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Homepage } from "./Homepage"
import { Contact } from "./Contact"
import './index.css'
import App from './App.tsx'

const PasswordWrapper = () => {
  const [password, setPassword] = useState("")
  const [unlock, setUnlock] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  const handleUnlock = () => {
    if(password === "delicious-coffee") {
      setUnlock(true)
    } else {
      alert("Incorrect password. Please try again.")
      setUnlock(false)
    }
    setPassword("")
  }

  return (
    <div>
      <p>Enter password:</p>
      <input type="password" placeholder="e.g. funny_kittens" value={password} onChange={handleChange} />
      <button style={{marginLeft: "6px"}} onClick={handleUnlock}>
        Unlock
      </button>
      
      {
        unlock ? <Contact /> : <Homepage />
      }
      
    </div>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PasswordWrapper />
  </StrictMode>,
)
