/*==================================================
NewStudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the new student page.
================================================== */
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';

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
  }
}));

const NewStudentView = (props) => {
  const { handleChange, handleSubmit, allCampuses } = props;
  const classes = useStyles();

  // Render a New Student view with an input form
  return (
    <div>
      <h1>New Student</h1>

      <div className={classes.root}>
        <div className={classes.formContainer}>
          <div className={classes.formTitle}>
            <Typography style={{ fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e' }}>
              Add a Student
            </Typography>
          </div>
          <form style={{ textAlign: 'left' }} onSubmit={(e) => handleSubmit(e)}>
            <TextField
              className={classes.formField}
              label="First Name"
              name="firstname"
              variant="outlined"
              onChange={(e) => handleChange(e)}
              required
            />

            <TextField
              className={classes.formField}
              label="Last Name"
              name="lastname"
              variant="outlined"
              onChange={(e) => handleChange(e)}
              required
            />

            <TextField
              className={classes.formField}
              label="Email"
              name="email"
              variant="outlined"
              type="email"
              onChange={(e) => handleChange(e)}
              required
            />

            <TextField
              className={classes.formField}
              label="GPA"
              name="gpa"
              variant="outlined"
              type="number"
              inputProps={{ step: "0.1", min: "0", max: "4.0" }}
              onChange={(e) => handleChange(e)}
              required
              helperText="Enter a value between 0.0 and 4.0"
            />

            <TextField
              className={classes.formField}
              label="Image URL"
              name="imageUrl"
              variant="outlined"
              onChange={(e) => handleChange(e)}
              helperText="Optional: Enter URL for student's profile image"
            />

            <FormControl variant="outlined" className={classes.formField}>
              <InputLabel id="campus-select-label">Campus</InputLabel>
              <Select
                labelId="campus-select-label"
                id="campus-select"
                name="campusId"
                onChange={(e) => handleChange(e)}
                label="Campus"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {allCampuses && allCampuses.map((campus) => (
                  <MenuItem key={campus.id} value={campus.id}>
                    {campus.name}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>Select a campus (optional)</FormHelperText>
            </FormControl>

            <div className={classes.buttonContainer}>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
              <Button component={Link} to="/students" variant="contained">
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NewStudentView;