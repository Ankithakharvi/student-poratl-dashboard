// import { useState, useEffect } from 'react';
// import "./Assignment.css";

// const Assignments = ({ isOpen, onClose }) => {
//   const [assignments, setAssignments] = useState([]);
//   const [filterCourse, setFilterCourse] = useState('');
//   const [filterStatus, setFilterStatus] = useState('all');

//   useEffect(() => {
//     fetch("https://student-poratl-backend.onrender.com/api/assignments")
//       .then(res => res.json())
//       .then(data => setAssignments(data))  // ✅ save data to state
//       .catch(err => console.error("Fetch error:", err));
//   }, []);

//   const filteredAssignments = assignments.filter(assignment => {
//     const courseMatch = assignment.course_id?.toLowerCase().includes(filterCourse.toLowerCase());
//     const statusMatch = filterStatus === 'all' || assignment.status?.toLowerCase() === filterStatus.toLowerCase();
//     return courseMatch && statusMatch;
//   });

//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <button className="close-btn" onClick={onClose}>×</button>

//         <div className="assignments">
//           <div className="page-header">
//             <h1>Assignments</h1>
//             <div className="filters">
//               <input 
//                 type="text" 
//                 placeholder="Filter by course ID..." 
//                 value={filterCourse}
//                 onChange={(e) => setFilterCourse(e.target.value)}
//                 className="filter-input"
//               />
//               <select 
//                 value={filterStatus} 
//                 onChange={(e) => setFilterStatus(e.target.value)}
//                 className="filter-select"
//               >
//                 <option value="all">All Status</option>
//                 <option value="completed">Completed</option>
//                 <option value="ongoing">Ongoing</option>
//                 <option value="pending">Pending</option>
//               </select>
//             </div>
//           </div>

//           <div className="assignments-container">
//             {filteredAssignments.map(assignment => (
//               <div key={assignment.id} className="assignment-card">
//                 <div className="assignment-header">
//                   <h3>{assignment.title}</h3>
//                   <span className={`status-badge status-${assignment.status?.toLowerCase()}`}>
//                     {assignment.status}
//                   </span>
//                 </div>
//                 <div className="assignment-details">
//                   <p><strong>Course:</strong> {assignment.course_id}</p>
//                   {assignment.due_date && <p><strong>Due Date:</strong> {assignment.due_date}</p>}
//                   {assignment.weightage && <p><strong>Weightage:</strong> {assignment.weightage}%</p>}
//                 </div>
//                 <div className="assignment-actions">
//                   {assignment.status?.toLowerCase() === 'ongoing' && (
//                     <button className="btn-primary">Submit</button>
//                   )}
//                   <button className="btn-secondary">View Details</button>
//                 </div>
//               </div>
//             ))}

//             {/* ✅ Fallback if no assignments */}
//             {filteredAssignments.length === 0 && (
//               <p className="no-data">No assignments found.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Assignments;
import { useState, useEffect } from "react";
import "./Assignment.css";

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [filterCourse, setFilterCourse] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const res = await fetch("https://student-poratl-backend.onrender.com/api/assignments/");

        if (!res.ok) throw new Error("Failed to fetch assignments");
        const data = await res.json();
        setAssignments(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAssignments();
  }, []);

  const filteredAssignments = assignments.filter((a) => {
    const courseMatch = a.course_id
      .toLowerCase()
      .includes(filterCourse.toLowerCase());
    const statusMatch =
      filterStatus === "all" ? true : a.status === filterStatus;
    return courseMatch && statusMatch;
  });

  return (
    <div className="assignments">
      <div className="page-header">
        <h1>📘 Assignments</h1>
        <div className="filters">
          <input
            type="text"
            placeholder="Filter by Course ID..."
            value={filterCourse}
            onChange={(e) => setFilterCourse(e.target.value)}
            className="filter-input"
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Status</option>
            <option value="Completed">Completed</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
      </div>

      {loading && <p className="info">Loading assignments...</p>}
      {error && <p className="error">❌ {error}</p>}

      <div className="assignments-container">
        {filteredAssignments.length > 0 ? (
          filteredAssignments.map((assignment) => (
            <div className="assignment-card" key={assignment.id}>
              <div className="assignment-header">
                <h3>{assignment.title}</h3>
                <span
                  className={`status-badge status-${assignment.status?.toLowerCase()}`}
                >
                  {assignment.status}
                </span>
              </div>
              <div className="assignment-details">
                <p>
                  <strong>Course:</strong> {assignment.course_id}
                </p>
                {assignment.due_date && (
                  <p>
                    <strong>Due Date:</strong> {assignment.due_date}
                  </p>
                )}
                {assignment.weightage && (
                  <p>
                    <strong>Weightage:</strong> {assignment.weightage}%
                  </p>
                )}
              </div>
              <div className="assignment-actions">
                {assignment.status?.toLowerCase() === "ongoing" && (
                  <button className="btn-primary">Submit</button>
                )}
                <button className="btn-secondary">View Details</button>
              </div>
            </div>
          ))
        ) : (
          !loading && <p className="info">No assignments found.</p>
        )}
      </div>
    </div>
  );
};

export default Assignments;
