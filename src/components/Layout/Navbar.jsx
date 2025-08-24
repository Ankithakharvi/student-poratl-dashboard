// src/components/Layout/Navbar.jsx
import UserDropdown from '../UserDropdown'
import { Home } from "lucide-react";
import "./Navbar.css"
const Navbar = ({ activeSection, user }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        {/* Add logo here */}
        <div className="logo-container">
          <img 
            src="/logo.jpeg" // or your logo path
            alt="Student Portal Logo" 
            className="navbar-logo"
          />
          <h2>My Student Portal</h2>
        </div>
        
       <div className="breadcrumb home-icon-container">
  <span className="home-icon">
    <Home /> {/* assuming you imported Home icon from lucide-react */}
  </span>
  <span>
    Home{activeSection !== 'Dashboard' ? ` / ${activeSection}` : ''}
  </span>
</div>

      </div>
      <div className="navbar-right">
        <UserDropdown user={user} />
      </div>
    </nav>
  )
}

export default Navbar