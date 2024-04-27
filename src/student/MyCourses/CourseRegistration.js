import React, { useState, useEffect } from 'react';
import styles from '../../template.module.css';
import StudentMyCoursesNav from '../NavBars/StudentMyCoursesNav';
import axios from 'axios';
import config from '../../config';

export default function CourseRegistration() {
  const [studentData, setStudentData] = useState('');
  const [sem, setSem] = useState('');
  const [courses, setCourses] = useState([]);
  const [faculties, setFaculties] = useState([]);
  const [formData, setFormData] = useState({
    ccode:'',
    facultyid:'',
    fmapid:'',
    studentid:''
  });
  const [scourses, setScourses] = useState([]);
  const [studentid, setStudentid] = useState('');

  useEffect(() => {
    const storedStudentData = localStorage.getItem('student');
    if (storedStudentData) {
      const parsedStudentData = JSON.parse(storedStudentData);
      setStudentData(parsedStudentData);
      setStudentid(parsedStudentData.studentid);
    }
  }, []);

  const ay = studentData.ay;

  const handleChange = (e) => {
    setSem(e.target.value);
  };

  const fetchCourses = async (ay) => {
    try {
      const response = await axios.get(`${config.url}/getcoursebyay/${ay}`);
      setCourses(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchScourses = async (studentid) => {
    try {
      const response = await axios.get(`${config.url}/viewstudentcourses/${studentid}`);
      setScourses(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchFaculties = async () => {
    try {
      const response = await axios.get(`${config.url}/viewfcmapping`);
      setFaculties(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleChange1 = async (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const selectedFacultyId = document.getElementById('facultyid').value;
      const selectedFmapId = faculties.find(faculty => faculty.facultyid === selectedFacultyId)?.fmapid || '';
      setFormData({
        ...formData,
        fmapid: selectedFmapId,
        studentid: studentid
      });
      const response = await axios.post(`${config.url}/insertstudentcourses`, formData);
      if (response.status === 200) {
        // Reset form data
        setFormData({
          ccode:'',
          facultyid:'',
          fmapid:'',
          studentid:''
        });
        // Refetch student courses
        fetchScourses(studentid);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  
  useEffect(() => {
    fetchCourses(ay);
    fetchFaculties();
    fetchScourses(studentid);
  }, [ay, studentid]);
  
  
  return (
    <div>
      <StudentMyCoursesNav />
      <div className={styles['group100']}>
        <div>
          <h2 align='center'>Course Registration</h2>
          <div onChange={handleChange}>
            <input type='radio' name='sem' value={'ODD'} />ODD Sem
            <input type='radio' name='sem' value={'EVEN'} />EVEN Sem
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Course: </label>
              <select required id='ccode' onChange={handleChange1}>
                <option value={''}>--Select--</option>
                {courses
                  .filter(course => sem === 'ODD' ? course.semester === 'ODD' : course.semester === 'EVEN')
                  .map(course => (
                    <option key={course.ccode} value={course.ccode}>{course.ccode} - {course.ctitle}</option>
                  ))}
              </select>
            </div>
            <div>
              <label>Faculty: </label>
              <select id='facultyid' onChange={handleChange1} required>
                <option value="">--Select--</option>
                {faculties
                  .filter(faculty => faculty.ccode === formData.ccode)
                  .map(filteredFaculty => (
                    <option key={filteredFaculty.facultyid} value={filteredFaculty.facultyid}>
                      {filteredFaculty.facultyid} - {filteredFaculty.fullname}
                    </option>
                  ))}
              </select>
            </div>
            <button type='submit'>Add Course</button>
          </form>
          <table>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Course Code</th>
                {/* <th>Course Title</th> */}
                <th>Faculty ID</th>
                {/* <th>Faculty Name</th> */}
              </tr>
            </thead>
            <tbody>
              {Array.isArray(scourses) && scourses.length > 0 ? (
                scourses.map((course, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{course.ccode}</td>
                    {/* <td>{ctitle}</td> */}
                    <td>{course.facultyid}</td>
                    {/* <td>{fullname}</td> */}
                  </tr>
                ))) : (
                  <tr>
                    <td colSpan={5}>No Data Found.</td>
                  </tr>
                )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
