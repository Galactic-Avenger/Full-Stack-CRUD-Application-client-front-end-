/*==================================================
AllStudentsView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the all students view page.
================================================== */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllStudentsView = ({ students, deleteStudent }) => {
  // If there are no students yet, show a prompt
  if (!students.length) {
    return (
      <div>
        <p>There are no students.</p>
        <Link to="/newstudent">
          <button>Add New Student</button>
        </Link>
      </div>
    );
  }
  
  // If there is at least one student, render All Students view 
  return (
    <div>
      <h1>All Students</h1>
      <div className="student-list">
        {students.map((student) => (
          <div key={student.id} className="student-item">
            {/* Link into the Single Student page */}
            <Link to={`/student/${student.id}`}>
              <h3>{student.firstName} {student.lastName}</h3>
            </Link>
            {/* Delete button */}
            <button onClick={() => deleteStudent(student.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>

      <br />
      {/* Link to your "Add Student" form */}
      <Link to="/newstudent">
        <button>Add New Student</button>
      </Link>
      <br />
      <br />
    </div>
  );
};

AllStudentsView.propTypes = {
  students: PropTypes.array.isRequired,
  deleteStudent: PropTypes.func.isRequired,
};


export default AllStudentsView;