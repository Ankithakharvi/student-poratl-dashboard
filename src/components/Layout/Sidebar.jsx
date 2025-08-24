 
// // src/components/Layout/Sidebar.jsx
// import { useState } from "react";
// import { 
//   LayoutDashboard, 
//   BookOpen, 
//   GraduationCap, 
//   FileText, 
//   Home,
//   ChevronLeft,
//   ChevronRight
// } from "lucide-react";

// const Sidebar = ({ activeSection, setActiveSection }) => {
//   const [collapsed, setCollapsed] = useState(false);

//   const menuItems = [
//     { name: "Dashboard", icon: <LayoutDashboard size={20} /> },
//     { name: "Courses", icon: <BookOpen size={20} /> },
//     { name: "CGPA", icon: <GraduationCap size={20} /> },
//     { name: "Assignments", icon: <FileText size={20} /> },
//   ];

//   return (
//     <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
//       {/* Top Home icon */}
//       <div className="sidebar-header">
//         <div className="home-icon-container">
             
//          </div>
//       </div>

//       {/* Toggle Button */}
//       <button 
//         className="collapse-btn" 
//         onClick={() => setCollapsed(!collapsed)}
//       >
//         {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
//       </button>

//       {/* Menu Items */}
//       <ul className="sidebar-menu">
//         {menuItems.map(item => (
//           <li
//             key={item.name}
//             className={activeSection === item.name ? "active" : ""}
//             onClick={() => setActiveSection(item.name)}
//           >
//             {item.icon}
//             {!collapsed && <span className="menu-text">{item.name}</span>}
//             {activeSection === item.name && !collapsed && (
//               <div className="active-indicator"></div>
//             )}
//           </li>
//         ))}
//       </ul>

//       <style>{`
//   .sidebar {
//     width: 300px;
//     background: rgba(183, 197, 201, 0.7); /* light glass */
//     backdrop-filter: blur(15px);
//     color: #1f2937; /* dark text for light background */
//     height: 150vh;
//     transition: width 0.3s ease;
//     display: flex;
//     flex-direction: column;
//     border-radius: 12px;
//     position: relative;
//     margin-left:20px;

//     border-right: 1px solid rgba(31, 41, 55, 0.1);
//   }

//   .sidebar.collapsed {
//     width: 120px;
//   }

//   .sidebar-header {
//     padding: 20px 15px;
//     border-bottom: 1px solid rgba(31, 41, 55, 0.1);
//     margin-bottom: 10px;
//   }

//   .home-icon-container {
//     display: flex;
    
//     align-items: center;
//     gap: 12px;
    
//   }

//   .home-icon {
//     color: #6366f1;
//     flex-shrink: 0;
//   }

//   .logo-text {
//     font-weight: 600;
//     font-size: 16px;
//     background: linear-gradient(to right, #6366f1, #818cf8);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//    }

//   .collapse-btn {
//     position: absolute;
//     top: 70px;
//     right: -12px;
//     background: #fff;
//     border: none;
//     border-radius: 50%;
//     width: 24px;
//     height: 24px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;
//     box-shadow: 0 2px 8px rgba(0,0,0,0.1);
//     z-index: 10;
//     transition: all 0.2s ease;
//   }

//   .collapse-btn:hover {
//     transform: scale(1.05);
//     box-shadow: 0 4px 12px rgba(0,0,0,0.15);
//   }

//   .sidebar-menu {
//     list-style: none;
//     padding: 0;
//     margin: 0;
//     flex: 1;
//   }

//   .sidebar-menu li {
//     display: flex;
//     align-items: center;
//     gap: 12px;
//     padding: 14px 20px;
//     cursor: pointer;
//     transition: all 0.2s ease;
//     position: relative;
//     margin: 6px 12px;
//     border-radius: 12px;
//     color: #1f2937;
//     height:80px;
//     background: rgba(59, 10, 124, 0.15);
//   }

//   .sidebar-menu li:hover {
//     background: rgba(99, 102, 241, 0.15);
//     color: #4f46e5;
//   }

//   .sidebar-menu li.active {
//     background: linear-gradient(to right, #6366f1, #818cf8);
//     color: #fff;
//     box-shadow: 0 4px 12px rgba(99,102,241,0.3);
//   }

//   .menu-text {
//     font-size: 14px;
//     font-weight: 500;
//     transition: opacity 0.2s ease;
//   }

//   .active-indicator {
//     position: absolute;
//     right: 12px;
//     width: 6px;
//     height: 6px;
//     background: #4f46e5;
//     border-radius: 50%;
//     box-shadow: 0 0 8px rgba(79, 70, 229, 0.5);
//   }

//   /* Responsive adjustments */
//   @media (max-width: 768px) {
//     .sidebar {
//       width: 70px;
//     }
    
//     .sidebar:not(.collapsed) {
//       width: 250px;
//       position: absolute;
//       z-index: 100;
//       height: 100%;
//       box-shadow: 4px 0 15px rgba(0, 0, 0, 0.1);
//     }
//   }
// `}</style>

//     </div>
//   );
// };

// export default Sidebar;
import { useState } from "react";
import { 
  LayoutDashboard, 
  BookOpen, 
  GraduationCap, 
  FileText, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";
import "./Sidebar.css";

const Sidebar = ({ activeSection, setActiveSection }) => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Courses", icon: <BookOpen size={20} /> },
    { name: "CGPA", icon: <GraduationCap size={20} /> },
    { name: "Assignments", icon: <FileText size={20} /> },
  ];

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      {/* Top Home icon */}
      <div className="sidebar-header">
        <div className="home-icon-container">
          {/* Optional Home Icon */}
        </div>
      </div>

      {/* Toggle Button */}
      <button 
        className="collapse-btn" 
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

      {/* Menu Items */}
      <ul className="sidebar-menu">
        {menuItems.map(item => (
          <li
            key={item.name}
            className={activeSection === item.name ? "active" : ""}
            onClick={() => setActiveSection(item.name)}
          >
            {item.icon}
            {!collapsed && <span className="menu-text">{item.name}</span>}
            {activeSection === item.name && !collapsed && (
              <div className="active-indicator"></div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

 