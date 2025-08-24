// src/components/Dashboard/Widget.jsx
const Widget = ({ title, children, className = '' }) => {
  return (
    <div className={`widget ${className}`}>
      <h3>{title}</h3>
      <div className="widget-content">
        {children}
      </div>
    </div>
  )
}

// Export as named export
export { Widget };