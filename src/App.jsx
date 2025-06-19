import { useState, useEffect, useRef } from 'react'
import actionListener from './MyActionListener'
import Keyboard from './components/Keyboard'
import Squares from './components/Squares'
import { checkWordExists } from './utils/wordUtils'
import { WORD_LENGTH } from './constants/gameConstants'

function App() {
  const [status, setStatus] = useState('idle') // idle | success | error
  const [chars, setChars] = useState([])

  const charsRef = useRef(chars);
  useEffect(() => {
    charsRef.current = chars;
  }, [chars]);

  useEffect(() => {
    const handler = async (key) => {
      setStatus('idle')
      if (key === 'BACK') {
        setChars((prev) => prev.slice(0, -1))
      } 
      else if (key === 'ENTER') {
        if (charsRef.current.length === WORD_LENGTH) {
          const exists = await checkWordExists(charsRef.current.join(''))
          setStatus(exists ? 'success' : 'error')
        } 
        else {
          setStatus('error')
        }
      } 
      else if (/^[A-Z]$/.test(key)) {
        setChars((prev) =>{
          return prev.length < WORD_LENGTH ? [...prev, key] : prev
        })
      }
    }
    actionListener.registerListener('KEY', handler)
    return () => {
      actionListener.removeListener('KEY')
    }
  }, [])

  const handleKey = (key) => {
    actionListener.emit('KEY', key)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-50">
      <Squares chars={chars} status={status} />
      <Keyboard onKey={handleKey} />
    </div>
  )
}

export default App
