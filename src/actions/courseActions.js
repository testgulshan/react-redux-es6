import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

function loadCoursesSuccess(courses) {
  return { type: types.LOAD_COURSES_SUCCESS, courses };
}

function updateCourseSuccess(course) {
  return { type: types.UPDATE_COURSE_SUCCESS, course };
}

function createCourseSuccess(course) {
  return { type: types.CREATE_COURSE_SUCCESS, course };
}

export function loadCourses() {
  return dispatch => {
    return courseApi.getAllCourses().then(courses => {
      return dispatch(loadCoursesSuccess(courses));
    });
  };
}

export function saveCourse(course) {
  return dispatch => {
    return courseApi.saveCourse(course).then(savedCourse => {
      course.id ? dispatch(updateCourseSuccess(savedCourse)) :
      dispatch(createCourseSuccess(savedCourse));
    }).catch(error => {
      throw error;
    });
  };
}