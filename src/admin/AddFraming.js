import axios from 'axios';
import React, { useEffect, useState } from 'react';
import config from '../config';

export default function AddFraming({ closePopup }) {
  const [facultys, setFacultys] = useState([]);
  const [courses, setCourses] = useState([]);
  const [ltps, setLTPS] = useState('');

  const fetchcourses = async () => {
    try {
      const response = await axios.get(`${config.url}/viewcourses`);
      setCourses(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchfacultys = async () => {
    try {
      const response = await axios.get(`${config.url}/viewfaculty`);
      setFacultys(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchfacultys();
    fetchcourses();
  }, []);

  const [formData, setFormData] = useState({
    facultyid: '',
    ccode: '',
    component: '',
    section: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handlechange = (e) => {
    const { id, value,type,checked } = e.target;
    if (id === 'ccode') {
      const selectedCourse = courses.find(course => course.ccode === value);
      setFormData({ ...formData, [id]: value });
      setLTPS(selectedCourse ? selectedCourse.ltps : '');
    } else {
      setFormData({ ...formData, [id]: value });
    }
    if (type === 'checkbox') {
      let updatedComponents = [...formData.component]; 
      if (checked) {
          updatedComponents.push(value); 
      } else {
          updatedComponents = updatedComponents.filter(component => component !== value);
      }
      setFormData({ ...formData, [id]: updatedComponents }); 
  } else {
      setFormData({ ...formData, [id]: value });
  }
  }; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const selectedCourse = courses.find(course => course.ccode === formData.ccode);
      const selectedFaculty = facultys.find(faculty => faculty.facultyid === formData.facultyid);
      
      const newData = {
        ...formData,
        ctitle: selectedCourse.ctitle,
        fullname: selectedFaculty.fullname
      };

      const response = await axios.post(`${config.url}/insertfcm`, newData);
      
      if (response.status === 200) {
        setFormData({
          facultyid: '',
          ccode: '',
          component: '',
          section: ''
        });
        setMessage(response.data);
        setError('');
        handleClose();
      }
    } catch (error) {
      setError(error.response.data);
      setMessage('');
    }
  };

  const handleClose = () => {
    closePopup();
  };

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        handleClose();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  });

  return (
    <div>
      <div className="popup active">
        <div className="popup-content">
          <span className="close-btn" onClick={handleClose}>&times;</span>
          <h2>Framing Form</h2>
          <form onSubmit={handleSubmit}>
            {message ? <h4 style={{ color: 'green' }}>{message}</h4> : <h4 style={{ color: 'red' }}>{error}</h4>}
            <div>
              <label>Course Code: </label>
              <select id="ccode" onChange={handlechange} required>
                <option value="">--Select--</option>
                {courses.map(course => (
                  <option key={course.ccode} value={course.ccode}>{course.ccode} - {course.ctitle}</option>
                ))}
              </select>
            </div>
            <div>
              <label>LTPS: </label>
              <span>{ltps}</span>
            </div>
            <div>
              <label>Faculty: </label>
              <select id='facultyid' onChange={handlechange} required>
                <option value="">--Select--</option>
                {facultys.map(faculty => (
                  <option key={faculty.facultyid} value={faculty.facultyid}>{faculty.facultyid} - {faculty.fullname}</option>
                ))}
              </select>
            </div>
            <div>
              <input type='checkbox' id='component' value={'L'} onChange={handlechange}/>Lecture&nbsp;&nbsp;&nbsp;
              <input type='checkbox' id='component' value={'T'} onChange={handlechange}/>Tutorial&nbsp;&nbsp;&nbsp;
              <input type='checkbox' id='component' value={'P'} onChange={handlechange}/>Practical&nbsp;&nbsp;&nbsp;
              <input type='checkbox' id='component' value={'S'} onChange={handlechange}/>Skill&nbsp;&nbsp;&nbsp;
            </div>
            <div>
              <label>Section:</label>
              <input type='number' min={1} max={30} id='section' onChange={handlechange} required />
            </div>
            <button type='submit'>Add</button>&nbsp;&nbsp;&nbsp;
            <button type='reset'>Clear</button>
          </form>
        </div>
      </div>
    </div>
  );
}
