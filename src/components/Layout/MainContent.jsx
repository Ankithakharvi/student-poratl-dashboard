// src/components/Layout/MainContent.jsx
import Dashboard from '../Dashboard/Dashboard'
import Courses from '../Courses/Courses'
import CGPA from '../CGPA/CGPA'
import Assignments from '../Assignments/Assignments'

const MainContent = ({ activeSection }) => {
  const renderContent = () => {
    switch(activeSection) {
      case 'Dashboard':
        return <Dashboard />
      case 'Courses':
        return <Courses />
      case 'CGPA':
        return <CGPA />
      case 'Assignments':
        return <Assignments />
      default:
        return <Dashboard />
    }
  }

  return (
    <main className="main-content">
      {renderContent()}
    </main>
  )
}

export default MainContent