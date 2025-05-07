
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";


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

const EditCampusView = ({ campus, onSubmit }) => {
  const classes = useStyles();

  // State to manage form fields
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    description: "",
    imageUrl: "",
  });

  // Validation errors
  const [errors, setErrors] = useState({});

  // Populate initial data when campus loads
  useEffect(() => {
    if (campus) {
      setFormData({
        name: campus.name || "",
        address: campus.address || "",
        description: campus.description || "",
        imageUrl: campus.imageUrl || "",
      });
    }
  }, [campus]);

  // Real-time validation logic
  const validate = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        if (!value.trim()) error = "Campus name is required.";
        break;
      case "address":
        if (!value.trim()) error = "Campus address is required.";
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
      <h1>Edit Campus</h1>
      <div className={classes.root}>
        <div className={classes.formContainer}>
          <div className={classes.formTitle}>
            <Typography style={{ fontWeight: "bold", fontFamily: "Courier, sans-serif", fontSize: "20px", color: "#11153e" }}>
              Update Campus Info
            </Typography>
          </div>

          <form onSubmit={handleSubmit}>
            <TextField
              className={classes.formField}
              label="Campus Name"
              name="name"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <div className={classes.errorText}>{errors.name}</div>}

            <TextField
              className={classes.formField}
              label="Address"
              name="address"
              variant="outlined"
              value={formData.address}
              onChange={handleChange}
              required
            />
            {errors.address && <div className={classes.errorText}>{errors.address}</div>}

            <TextField
              className={classes.formField}
              label="Description"
              name="description"
              variant="outlined"
              multiline
              rows={4}
              value={formData.description}
              onChange={handleChange}
              helperText="Provide a description of the campus"
            />

            <TextField
              className={classes.formField}
              label="Image URL"
              name="imageUrl"
              variant="outlined"
              value={formData.imageUrl}
              onChange={handleChange}
              helperText="Optional: Enter campus image URL"
            />

            <div className={classes.buttonContainer}>
              <Button variant="contained" color="primary" type="submit">
                Update Campus
              </Button>
              <Button component={Link} to={`/campus/${campus.id}`} variant="contained">
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditCampusView;