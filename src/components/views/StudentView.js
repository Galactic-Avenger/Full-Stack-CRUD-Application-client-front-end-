/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link } from "react-router-dom";

const StudentView = (props) => {
  const { student } = props;

  // Render a single Student view 
  return (
    <div>
      <h1>{student.firstName + " " + student.lastName}</h1>
      {student.campus ? (
  <h3>
    Campus: <Link to={`/campus/${student.campus.id}`}>{student.campus.name}</Link>
  </h3>
) : (
  <h3>This student is not enrolled in any campus.</h3>
)}

    </div>
  );

};

export default StudentView;