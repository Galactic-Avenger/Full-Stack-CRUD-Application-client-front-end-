/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
// Import react and react-router-dom necessary libraries
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = ({ allCampuses }) => (
  <div>

    {allCampuses.length === 0 ? (
      <p>There are no campuses yet.</p>
    ) : (
      <div className="campus-list">
        {allCampuses.map((campus) => (
          <div key={campus.id} className="campus-item">
            <Link to={`/campus/${campus.id}`}>
              <h3>{campus.name}</h3>
            </Link>
            <img
              src={campus.imageUrl || "/default-campus.png"}
              alt={campus.name}
              width="200"
              height="150"
            />
          </div>
        ))}
      </div>
    )}

    {/* always visible */}
    <br />
    <Link to="/campuses/new">
      <button>Add New Campus</button>
    </Link>
    <br />
    <br />
  </div>
);

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;