import { useState, useEffect } from 'react'
import './App.css'
import ComboList from './ComboList'
import ComboForm from './ComboForm'

function App() {
  const [combos, setCombos] = useState([])

  useEffect(() => {
    fetchCombos()
  }, [])

  const fetchCombos = async () => {
    const response = await fetch("http://127.0.0.1:5000/combos")
    const data = await response.json()
    setCombos(data.combos)
    console.log(data.combos)
  }

  return <>
  <ComboList combos={combos} />
  <ComboForm></ComboForm>
  </>
}

export default App
