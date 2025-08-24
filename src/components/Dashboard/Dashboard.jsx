import { useEffect, useState } from "react";
import { Widget } from "./Widget";
import "./Dashboard.css";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://student-poratl-backend.onrender.com/api/user/") // ✅ use deployed backend
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error("Error fetching user data:", err));
  }, []);

  if (!user) {
    return <p>Loading Dashboard...</p>;
  }

  return (
    <div className="dashboard">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="widgets-grid grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {/* Personal Data Widget */}
        <Widget title="Personal Data" className="wide col-span-2">
          <div className="form-grid grid grid-cols-2 gap-2">
            <div>Name:</div><div>{user.personal.name}</div>
            <div>ID:</div><div>{user.personal.id}</div>
            <div>Phone Number:</div><div>{user.personal.phone}</div>
            <div>Email:</div><div>{user.personal.email}</div>
            <div>Encoder:</div><div>{user.personal.encoder}</div>
          </div>
        </Widget>

        {/* Guardian Data Widget */}
        <Widget title="Guardian Data">
          <div className="form-grid grid grid-cols-2 gap-2">
            <div>Name:</div><div>{user.guardian.name}</div>
            <div>Email:</div><div>{user.guardian.email}</div>
            <div>Phone Number:</div><div>{user.guardian.phone}</div>
            <div>Alternate Email:</div><div>{user.guardian.alt_email}</div>
            <div>Address:</div><div>{user.guardian.address}</div>
          </div>
        </Widget>

        {/* Degree Program Widget */}
        <Widget title="Degree Program">
          <div className="form-grid grid grid-cols-2 gap-2">
            <div>Program:</div><div>{user.degree.program}</div>
            <div>Discipline:</div><div>{user.degree.discipline}</div>
            <div>Join Date:</div><div>{user.degree.join_date}</div>
            <div>Expected Completion:</div><div>{user.degree.completion}</div>
            <div>Status:</div>
            <div className="status-active text-green-600 font-bold">{user.degree.status}</div>
          </div>
        </Widget>

        {/* Admin Notifications */}
        <Widget title="Admin Notifications" className="col-span-1">
          <div className="notification-list space-y-1">
            {user.notifications.map((note, idx) => (
              <div key={idx} className={`notification-card border-l-4 border-${note.color}-500`}>
                <div className="flex items-center gap-2 p-2">
                  {/* Icon */}
                  <div className={`notification-icon text-${note.color}-500`}>
                    {note.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex justify-between items-center">
                    <div>
                      <h4 className="font-semibold text-sm">{note.type}</h4>
                      <p className="text-xs text-gray-400 truncate">{note.desc}</p>
                    </div>
                    <span className={`text-${note.color}-600 font-semibold text-xs ml-2`}>
                      {note.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Widget>

        {/* Transfer Data Widget */}
        <Widget title="Transfer Data">
          <div className="form-grid grid grid-cols-2 gap-2">
            <div>Request ID:</div><div>{user.transfer.id}</div>
            <div>Type:</div><div>{user.transfer.type}</div>
            <div>Status:</div><div className="status-approved text-green-600 font-bold">{user.transfer.status}</div>
            <div>Transferred Credits:</div><div>{user.transfer.credits}</div>
            <div>Processed Date:</div><div>{user.transfer.date}</div>
          </div>
        </Widget>

      </div>
    </div>
  );
};

export default Dashboard;
