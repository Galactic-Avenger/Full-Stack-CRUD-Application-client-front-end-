/*==================================================
NewStudentContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewStudentView from '../views/NewStudentView';
import { addStudentThunk, fetchAllCampusesThunk } from '../../store/thunks';

class NewStudentContainer extends Component {
  // Initialize state
  constructor(props){
    super(props);
    this.state = {
      firstname: "", 
      lastname: "",
      email: "",
      gpa: "",
      imageUrl: "",
      campusId: "",
      redirect: false, 
      redirectId: null,
      error: null
    };
  }

  // Fetch all campuses when component mounts
  componentDidMount() {
    this.props.fetchAllCampuses();
  }

  // Capture input data when it is entered
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  // Take action after user click the submit button
  handleSubmit = async event => {
    event.preventDefault();  // Prevent browser reload/refresh after submit.

    try {
      // Basic form validation
      if (!this.state.firstname || !this.state.lastname || !this.state.email) {
        this.setState({ error: "First name, last name, and email are required fields" });
        return;
      }

      // Validate GPA is between 0 and 4.0
      const gpa = parseFloat(this.state.gpa);
      if (isNaN(gpa) || gpa < 0 || gpa > 4.0) {
        this.setState({ error: "GPA must be a number between 0 and 4.0" });
        return;
      }

      // Create student object to add
      let student = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        email: this.state.email,
        gpa: gpa,
        imageUrl: this.state.imageUrl || undefined, // Only include if provided
        campusId: this.state.campusId || null // Use null if empty string
      };
      
      // Add new student in back-end database
      let newStudent = await this.props.addStudent(student);

      if (newStudent && newStudent.id) {
        // Update state, and trigger redirect to show the new student
        this.setState({
          firstname: "", 
          lastname: "", 
          email: "",
          gpa: "",
          imageUrl: "",
          campusId: "",
          redirect: true, 
          redirectId: newStudent.id,
          error: null
        });
      } else {
        this.setState({ error: "Error adding student. Please try again." });
      }
    } catch (err) {
      console.error(err);
      this.setState({ error: "An error occurred. Please try again." });
    }
  }

  // Unmount when the component is being removed from the DOM:
  componentWillUnmount() {
    this.setState({redirect: false, redirectId: null});
  }

  // Render new student input form
  render() {
    // Redirect to new student's page after submit
    if(this.state.redirect) {
      return (<Redirect to={`/student/${this.state.redirectId}`}/>)
    }

    // Display the input form via the corresponding View component
    return (
      <div>
        <Header />
        {this.state.error && (
          <div style={{color: 'red', textAlign: 'center', marginBottom: '20px'}}>
            {this.state.error}
          </div>
        )}
        <NewStudentView 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit}
          allCampuses={this.props.allCampuses} 
        />
      </div>          
    );
  }
}

// The following input arguments are passed to the "connect" function used by "NewStudentContainer" component to connect to Redux Store.
// The "mapState" argument is used to read values from the Redux Store and pass them as props
const mapState = (state) => {
  return {
    allCampuses: state.allCampuses  // Get the State object from Reducer "allCampuses"
  };
};

// The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => {
  return {
    addStudent: (student) => dispatch(addStudentThunk(student)),
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk())
  };
};

// Export store-connected container by default
// NewStudentContainer uses "connect" function to connect to Redux Store and to read values from the Store 
// (and re-read the values when the Store State updates).
export default connect(mapState, mapDispatch)(NewStudentContainer);