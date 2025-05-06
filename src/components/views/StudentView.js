/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
// Import react and react-router-dom necessary libraries
import React from "react";
import { Link } from "react-router-dom";

// Take in props data to construct the component
const StudentView = (props) => {
  const { student } = props; // student is an object containing student data

  // Render a Single Student view 
  return (
    <div>
      <h1>{student.firstName + " " + student.lastName}</h1>
      {student.campus ? (
  <h3>
    {/* Link into the Single Campus page */}
    Campus: <Link to={`/campus/${student.campus.id}`}>{student.campus.name}</Link>
  </h3>
) : (
  <h3>This student is not enrolled in any campus.</h3>
)}
    {/* Edit Student button */}
    <Link to={`/student/${student.id}/edit`}>
        <button>Edit</button>
      </Link>
    </div>
  );
};

// Export the component for use in other parts of the application
export default StudentView;