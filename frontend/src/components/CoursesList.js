// src/components/CoursesList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CoursesList = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/courses');
      setCourses(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  return (
    <div>
      <h2>Courses List</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.title}>{course.description} - ${course.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesList;
