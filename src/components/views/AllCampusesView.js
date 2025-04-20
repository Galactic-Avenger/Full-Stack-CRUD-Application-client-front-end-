/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = ({ allCampuses }) => {
  // If there is no campus, display a message.
  if (!allCampuses.length) {
    return <div>There are no campuses.</div>;
  }

  // If there is at least one campus, render All Campuses view 
  return (
    <div>
      <h1>All Campuses</h1>
      <div className="campus-list">
        {allCampuses.map((campus) => (
          <div key={campus.id} className="campus-item">
            {/* Link into the Single Campus page */}
            <Link to={`/campus/${campus.id}`}>
              <h3>{campus.name}</h3>
            </Link>
            {/* Show campus image, or fall back to a default */}
            <img
              src={campus.imageUrl || "/default-campus.png"}
              alt={campus.name}
              width="200"
              height="150"
            />
          </div>
        ))}
      </div>

      <br />
      {/* Link to your "Add Campus" form (adjust path if yours differs) */}
      <Link to="/campuses/new">
        <button>Add New Campus</button>
      </Link>
      <br />
      <br />
    </div>
  );
};

// Validate data type of the props passed to component.
AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;