/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
// Import react and react-router-dom necessary libraries
import React from "react";
import { Link } from "react-router-dom";

// Take in props data to construct the component
const CampusView = (props) => {
  const {campus} = props; // campus is an object containing campus data
  
  // Render a single Campus view with list of its students
  return (
    <div>
  <h1>{campus.name}</h1>
  <p>{campus.address}</p>
  <p>{campus.description}</p>

  <Link to={`/campus/${campus.id}/edit`}>
        <button>Edit</button>
  </Link>

  <Link to="/students">
          <button>Manage Students</button>
  </Link>

  {campus.students.length ? (
    campus.students.map((student) => ( // student is an object containing student data
      <div key={student.id}>
        {/* Link into the Single Student page */}
        <Link to={`/student/${student.id}`}>
          <h2>{student.firstName} {student.lastName}</h2>
        </Link>
      </div>
    ))
  ) : (
    <p>This campus currently has no students enrolled.</p>
  )}
</div>
  );
};

// Export the component for use in other parts of the application
export default CampusView;