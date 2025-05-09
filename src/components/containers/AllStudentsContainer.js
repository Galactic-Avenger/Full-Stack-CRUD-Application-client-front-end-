/*==================================================
AllStudentsContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
// Import React redux and React Router DOM libraries
import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

// Import Redux Store and Thunks
import { 
  fetchAllStudentsThunk,
  deleteStudentThunk
} from '../../store/thunks';

// Import the View component
import AllStudentsView from '../views/AllStudentsView';

// Import the CSS file
class AllStudentsContainer extends Component {
  // Get all students data from back-end database
  componentDidMount() {
    this.props.fetchAllStudents(); 
  }

  // Handle delete student action
  handleDelete = (studentId) => {
    // Dispatch the thunk to delete a student
    this.props.deleteStudent(studentId);
  };

  // Render All Students view by passing all students data as props to the corresponding View component
  render() {
    const { allStudents } = this.props;
    return (
      <div>
        <Header />
        {/* Pass both data and delete callback down to the View */}
        <AllStudentsView 
          students={allStudents} 
          deleteStudent={this.handleDelete} 
        />
      </div>
    );
  }
}

// The following 2 input arguments are passed to the "connect" function used by "AllStudentsContainer" component to connect to Redux Store.
// 1. The "mapState" argument specifies the data from Redux Store that the component needs.
// The "mapState" is called when the Store State changes, and it returns a data object of "allStudents".
const mapState = (state) => ({
    allStudents: state.allStudents,  // Get the State object from Reducer "allStudents"
});
// 2. The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => ({
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    deleteStudent: (studentId) => dispatch(deleteStudentThunk(studentId)), // Call the thunk to delete a student
  });

// Export store-connected container by default
// AllStudentsContainer uses "connect" function to connect to Redux Store and to read values from the Store 
// (and re-read the values when the Store State updates).
export default withRouter(connect(mapState, mapDispatch)(AllStudentsContainer));