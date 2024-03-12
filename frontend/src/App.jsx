import { useState, useEffect } from 'react'
import './App.css'
import ComboList from './ComboList'
import ComboForm from './ComboForm'

function App() {
  const [combos, setCombos] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentCombo, setCurrentCombo] = useState({})

  useEffect(() => {
    fetchCombos()
  }, []);

  const fetchCombos = async () => {
    const response = await fetch("http://127.0.0.1:5000/combos")
    const data = await response.json()
    setCombos(data.combos)
    console.log(data.combos)
  };

  const closeModal = () => {
    setIsModalOpen(false)
    setCurrentCombo({})
  }

  const openCreateModal = () => {
    if (!isModalOpen) {
      setIsModalOpen(true)
    }
  }

  const openEditModal = (combo) => {
    if (isModalOpen) return
    setCurrentCombo(combo)
    setIsModalOpen(true)
  }

  const onUpdate = () => {
    closeModal()
    fetchCombos()
  }

  return (
    <>
      <ComboList combos={combos} updateCombo={openEditModal} updateCallback={onUpdate}/>
      <button onClick={openCreateModal}>Create Combo</button>
      {isModalOpen && <div className="modal">
        <div className="modal-content">
          <span className='close' onClick={closeModal}>&times;</span>
          <ComboForm existingCombo={currentCombo} updateCallback={onUpdate}></ComboForm>
        </div>
      </div>
      }
    </>
  );
};

export default App
