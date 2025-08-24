// src/components/Courses/Courses.jsx
import { useState } from 'react'
import { coursesData } from '../../data/mockData'
import "./Courses.css";

const Courses = () => {
  const [filter, setFilter] = useState('')
  
  const filteredCourses = coursesData.filter(course => 
    course.name.toLowerCase().includes(filter.toLowerCase()) ||
    course.id.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div className="courses">
      <div className="page-header">
      <h1> <center>Courses</center> </h1>
        <input 
          type="text" 
          placeholder="Search courses..." 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="search-input"
        />
      </div>
      
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Course ID</th>
              <th>Credit Units</th>
              <th>Student Grade</th>
              <th>Grade Points</th>
            </tr>
          </thead>
          <tbody>
            {filteredCourses.map(course => (
              <tr key={course.id}>
                <td>{course.name}</td>
                <td>{course.id}</td>
                <td>{course.credits}</td>
                <td>
                  <span className={`grade-badge grade-${course.grade}`}>
                    {course.grade}
                  </span>
                </td>
                <td>{course.gradePoints.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Courses