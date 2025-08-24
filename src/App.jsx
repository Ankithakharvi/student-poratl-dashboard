// src/App.jsx
import { useState } from 'react'
import Navbar from './components/Layout/Navbar'
import Sidebar from './components/Layout/Sidebar'
import MainContent from './components/Layout/MainContent'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('Dashboard')
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@university.edu',
    avatar: 'https://via.placeholder.com/40'
  })

  return (
    <div className="app">
      <Navbar activeSection={activeSection} user={user} />
      <div className="app-body">
        <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        <MainContent activeSection={activeSection} />
      </div>
    </div>
  )
}

export default App