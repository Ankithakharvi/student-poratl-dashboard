// src/components/UserDropdown.jsx
import { useState, useRef, useEffect } from 'react'

const UserDropdown = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleMenuItemClick = (action) => {
    setIsOpen(false)
    alert(`${action} action would be performed here`)
  }

  return (
    <div className="user-dropdown" ref={dropdownRef}>
      <div className="user-trigger" onClick={() => setIsOpen(!isOpen)}>
<img src="/dp.jpeg" alt="user avatar" className="avatar" />
       <span className="user-name">{user.name}</span>
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </div>
      
      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item" onClick={() => handleMenuItemClick('Change Password')}>
            Change Password
          </div>
          <div className="dropdown-item" onClick={() => handleMenuItemClick('Edit Personal Data')}>
            Edit Personal Data
          </div>
          <div className="dropdown-divider"></div>
          <div className="dropdown-item" onClick={() => handleMenuItemClick('Logout')}>
            Logout
          </div>
        </div>
      )}
    </div>
  )
}

export default UserDropdown