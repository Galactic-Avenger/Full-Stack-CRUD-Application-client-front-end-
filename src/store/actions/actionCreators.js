import * as at from './actionTypes';

// ACTION CREATORS;
/** needs to be an action creator
 * for each action type
 */

// All Campuses 
export const fetchAllCampuses = (campuses) => ({
  type: at.FETCH_ALL_CAMPUSES,
  payload: campuses, // array of campuses
});

// Single Campus
export const fetchCampus = (campus) => ({
  type: at.FETCH_CAMPUS,
  payload: campus, // single campus object
});

// All Students
export const fetchAllStudents = (students) => ({
  type: at.FETCH_ALL_STUDENTS,
  payload: students, // array of students
});

// Add Student
export const addStudent = (student) => ({
  type: at.ADD_STUDENT,
  payload: student, // new student object
});

// Delete Student
export const deleteStudent = (studentId) => ({
  type: at.DELETE_STUDENT,
  payload: studentId, // student ID to delete
});

// Edit Student
export const editStudent = (student) => ({
  type: at.EDIT_STUDENT,
  payload: student, // student object with updated data
});

// Fetch Student
export const fetchStudent = (student) => ({
  type: at.FETCH_STUDENT,
  payload: student, // single student object
});