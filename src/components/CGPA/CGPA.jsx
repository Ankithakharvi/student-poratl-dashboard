import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./CGPA.css";

const CGPA = () => {
  const [cgpaData, setCgpaData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://student-poratl-backend.onrender.com/api/cgpa/") // ✅ note trailing slash
      .then((res) => res.json())
      .then((data) => {
        setCgpaData(data);  // ✅ now we set the state
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching CGPA:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ color: "#fff" }}>Loading CGPA...</p>;

  const gradeColors = {
    "A": "grade-A",
    "A-": "grade-A-",
    "B+": "grade-B+",
    "B": "grade-B",
    "B-": "grade-B-"
  };

  return (
    <div className="cgpa-container">
      <h1>CGPA Dashboard</h1>

      {/* Summary Cards */}
      <div className="summary-cards">
        <div className="summary-card current-cgpa">
          <h3>Current CGPA</h3>
          <p>{cgpaData?.current_cgpa}</p>
          <span>Out of 4.0</span>
        </div>
        <div className="summary-card semester-gpa">
          <h3>Semester GPA</h3>
          <p>{cgpaData?.semester_gpa}</p>
          <span>{cgpaData?.semester_name}</span>
        </div>
        <div className="summary-card total-credits">
          <h3>Total Credits</h3>
          <p>{cgpaData?.total_credits}</p>
          <span>Completed</span>
        </div>
        <div className="summary-card class-rank">
          <h3>Class Rank</h3>
          <p>{cgpaData?.class_rank}th</p>
          <span>Out of {cgpaData?.class_size}</span>
        </div>
      </div>

      {/* Progress & Semester Breakdown */}
      <div className="progress-section">
        <div className="progress-card">
          <h3>CGPA Progress</h3>
          <div style={{ width: "150px", height: "150px", margin: "0 auto" }}>
            <CircularProgressbar
              value={cgpaData?.cgpa_progress}
              text={`${cgpaData?.current_cgpa}`}
              styles={buildStyles({
                textSize: "16px",
                pathColor: "#6c63ff",
                textColor: "#fff",
                trailColor: "#333",
              })}
            />
          </div>
          <p>Target CGPA: {cgpaData?.target_cgpa}</p>
          <p>Current: {cgpaData?.current_cgpa}</p>
        </div>

        <div className="semester-card">
          <h3>Semester Breakdown</h3>
          <ul>
            {cgpaData?.semesters?.map((sem, i) => (
              <li key={i}>
                <span>{sem.name}</span>
                <span>{sem.credits} credits</span>
                <span>{sem.gpa} GPA</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Grade Distribution */}
      <div className="grades-card">
        <h3>Grade Distribution</h3>
        <div className="grades-grid">
          {cgpaData?.grades?.map((g, i) => (
            <div key={i} className={`grade-box ${gradeColors[g.grade]}`}>
              <span>{g.grade}</span>
              <br />
              <span>{g.count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CGPA;
