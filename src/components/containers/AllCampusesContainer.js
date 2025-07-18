/*==================================================
/src/components/containers\AllCampusesContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */
// Import react and redux necessary libraries
import Header from './Header';
import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllCampusesThunk } from "../../store/thunks";
import AllCampusesView from "../views/AllCampusesView";
import { deleteCampusThunk } from "../../store/thunks";

// The AllCampusesContainer component is a container component that fetches all campuses data
class AllCampusesContainer extends Component {
  // Get all campuses data from back-end database
  componentDidMount() {
    // When the component mounts, kick off the thunk to load campuses
    this.props.fetchAllCampuses();
  }

  // Render All Campuses view by passing all campuses data as props to the corresponding View component
  render() {
    const { allCampuses } = this.props;
    return (
      <div>
        <Header />
        {/* Pass the array of campuses down to the View and delete for rendering */}
        <AllCampusesView allCampuses={allCampuses} deleteCampus={this.props.deleteCampus} />
      </div>
    );
  }
}

// 1. The "mapState" argument specifies the data from Redux Store that the component needs.
// The "mapState" is called when the Store State changes, and it returns a data object of "allCampuses".
// The following 2 input arguments are passed to the "connect" function used by "AllCampusesContainer" component to connect to Redux Store.
const mapState = (state) => ({
  allCampuses: state.allCampuses,  // Get the State object from Reducer "allCampuses"
});  

// 2. The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => ({
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()), // Fetch all campuses data from server side
    deleteCampus: (campusId) => dispatch(deleteCampusThunk(campusId)), // Delete a campus from server side
});

// Type check props;
AllCampusesContainer.propTypes = {
  allCampuses: PropTypes.array.isRequired, // Array of all campuses
  fetchAllCampuses: PropTypes.func.isRequired, // Function to fetch all campuses
};

// Export store-connected container by default
// AllCampusesContainer uses "connect" function to connect to Redux Store and to read values from the Store 
// (and re-read the values when the Store State updates).
export default connect(mapState, mapDispatch)(AllCampusesContainer);