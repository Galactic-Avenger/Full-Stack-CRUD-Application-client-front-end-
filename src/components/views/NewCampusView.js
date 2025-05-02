/*==================================================
NewCampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the new campus page.
================================================== */
import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

// Create styling for the input form
const useStyles = makeStyles(() => ({
  formContainer: {
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
    padding: '20px',
    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.15)'
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    textDecoration: 'none'
  },
  customizeAppBar: {
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  formTitle: {
    backgroundColor: '#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '10px'
  },
  formField: {
    marginBottom: '15px',
    width: '100%'
  },
  buttonContainer: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  error: {
    color: 'red',
    fontSize: '0.8rem',
    marginTop: '2px'
  }
}));

const NewCampusView = (props) => {
  const { 
    handleChange, 
    handleSubmit,
    errors,
    values
  } = props;
  
  const classes = useStyles();

  return (
    <div>
      <h1>New Campus</h1>

      <div className={classes.root}>
        <div className={classes.formContainer}>
          <div className={classes.formTitle}>
            <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e' }}>
              Add a Campus
            </Typography>
          </div>
          <form style={{ textAlign: 'left' }} onSubmit={(e) => handleSubmit(e)}>
            <TextField
              className={classes.formField}
              label="Campus Name"
              name="name"
              variant="outlined"
              value={values.name}
              onChange={(e) => handleChange(e)}
              error={!!errors.name}
              helperText={errors.name}
              required
            />

            <TextField
              className={classes.formField}
              label="Campus Address"
              name="address"
              variant="outlined"
              value={values.address}
              onChange={(e) => handleChange(e)}
              error={!!errors.address}
              helperText={errors.address}
              required
            />

            <TextField
              className={classes.formField}
              label="Description"
              name="description"
              variant="outlined"
              multiline
              rows={4}
              value={values.description}
              onChange={(e) => handleChange(e)}
              error={!!errors.description}
              helperText={errors.description}
              required
            />

            <TextField
              className={classes.formField}
              label="Image URL"
              name="imageUrl"
              variant="outlined"
              value={values.imageUrl}
              onChange={(e) => handleChange(e)}
              error={!!errors.imageUrl}
              helperText={errors.imageUrl || "Enter a URL for the campus image"}
            />

            <div className={classes.buttonContainer}>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
              <Button component={Link} to="/campuses" variant="contained">
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewCampusView;