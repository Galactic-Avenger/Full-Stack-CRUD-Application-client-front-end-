/*==================================================
EditStudentView.js

This View component renders a styled form for editing a student's information.
The input fields are pre-populated with existing student data.
==================================================*/
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";

// Custom Styling
const useStyles = makeStyles(() => ({
  formContainer: {
    width: "500px",
    backgroundColor: "#f0f0f5",
    borderRadius: "5px",
    margin: "auto",
    padding: "20px",
    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.15)",
  },
  formTitle: {
    backgroundColor: "#c5c8d6",
    marginBottom: "15px",
    textAlign: "center",
    borderRadius: "5px 5px 0px 0px",
    padding: "10px",
  },
  formField: {
    marginBottom: "15px",
    width: "100%",
  },
  buttonContainer: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
  },
  errorText: {
    color: "red",
    fontSize: "0.9em",
    marginTop: "-10px",
    marginBottom: "10px",
  },
}));

const EditStudentView = ({ student, allCampuses, onSubmit }) => {
  const classes = useStyles();

  // State to manage form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gpa: "",
    imageUrl: "",
    campusId: "",
  });

  // Validation errors
  const [errors, setErrors] = useState({});

  // Populate initial data when student loads
  useEffect(() => {
    if (student) {
      setFormData({
        firstName: student.firstName || "",
        lastName: student.lastName || "",
        email: student.email || "",
        gpa: student.gpa || "",
        imageUrl: student.imageUrl || "",
        campusId: student.campusId || "",
      });
    }
  }, [student]);

  // Real-time validation logic
  const validate = (name, value) => {
    let error = "";

    switch (name) {
      case "firstName":
      case "lastName":
        if (!value.trim()) error = "This field is required.";
        break;
      case "email":
        if (!value.trim()) {
          error = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Invalid email format.";
        }
        break;
      case "gpa":
        const gpa = parseFloat(value);
        if (value && (isNaN(gpa) || gpa < 0 || gpa > 4)) {
          error = "GPA must be between 0.0 and 4.0.";
        }
        break;
      default:
        break;
    }

    return error;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    const error = validate(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    Object.entries(formData).forEach(([key, val]) => {
      const error = validate(key, val);
      if (error) validationErrors[key] = error;
    });
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(formData);
    }
  };

  // Form UI rendering
  return (
    <div>
      <h1>Edit Student</h1>
      <div className={classes.root}>
        <div className={classes.formContainer}>
          <div className={classes.formTitle}>
            <Typography style={{ fontWeight: "bold", fontFamily: "Courier, sans-serif", fontSize: "20px", color: "#11153e" }}>
              Update Student Info
            </Typography>
          </div>

          <form onSubmit={handleSubmit}>
            <TextField
              className={classes.formField}
              label="First Name"
              name="firstName"
              variant="outlined"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            {errors.firstName && <div className={classes.errorText}>{errors.firstName}</div>}

            <TextField
              className={classes.formField}
              label="Last Name"
              name="lastName"
              variant="outlined"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            {errors.lastName && <div className={classes.errorText}>{errors.lastName}</div>}

            <TextField
              className={classes.formField}
              label="Email"
              name="email"
              type="email"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <div className={classes.errorText}>{errors.email}</div>}

            <TextField
              className={classes.formField}
              label="GPA"
              name="gpa"
              type="number"
              inputProps={{ step: "0.1", min: "0", max: "4.0" }}
              variant="outlined"
              value={formData.gpa}
              onChange={handleChange}
              helperText="Enter a value between 0.0 and 4.0"
            />
            {errors.gpa && <div className={classes.errorText}>{errors.gpa}</div>}

            <TextField
              className={classes.formField}
              label="Image URL"
              name="imageUrl"
              variant="outlined"
              value={formData.imageUrl}
              onChange={handleChange}
              helperText="Optional: Enter image URL"
            />

            <FormControl variant="outlined" className={classes.formField}>
              <InputLabel id="campus-select-label">Campus</InputLabel>
              <Select
                labelId="campus-select-label"
                name="campusId"
                value={formData.campusId}
                onChange={handleChange}
                label="Campus"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {allCampuses &&
                  allCampuses.map((campus) => (
                    <MenuItem key={campus.id} value={campus.id}>
                      {campus.name}
                    </MenuItem>
                  ))}
              </Select>
              <FormHelperText>Select a campus (optional)</FormHelperText>
            </FormControl>

            <div className={classes.buttonContainer}>
              <Button variant="contained" color="primary" type="submit">
                Update Student
              </Button>
              <Button component={Link} to={`/students`} variant="contained">
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditStudentView;
