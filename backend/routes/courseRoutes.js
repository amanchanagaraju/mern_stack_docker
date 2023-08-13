const express = require('express');
const router = express.Router();

const authUser = require('../middleware/authUser');
const authRole = require('../middleware/authRole');
const courseController = require('../controllers/courseController');

// Public route: Get all courses
router.get('/', courseController.getAllCourses);

// Protected route: Get course by ID
router.get('/:id', authUser, courseController.getCourseById);

// Protected route (admin only): Create a new course
//router.post('/',  courseController.createCourse);
router.post('/', authUser, authRole('admin'), courseController.createCourse);

// Protected route (admin only): Update an existing course
router.put('/:id', authUser, authRole('admin'), courseController.updateCourse);

// Protected route (admin only): Delete a course
router.delete('/:id', authUser, authRole('admin'), courseController.deleteCourse);

module.exports = router;
