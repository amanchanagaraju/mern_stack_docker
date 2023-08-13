const Course = require('../models/Course');

// Controller functions for course-related logic
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const createCourse = async (req, res) => {
  try {
    const newCourse = await Course.create(req.body);
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(400).json({ message: 'Bad request' });
  }
};

const updateCourse = async (req, res) => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedCourse) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(updatedCourse);
  } catch (error) {
    res.status(400).json({ message: 'Bad request' });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const deletedCourse = await Course.findByIdAndDelete(req.params.id);
    if (!deletedCourse) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.json(deletedCourse);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};
