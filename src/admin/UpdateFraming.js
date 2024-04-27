import axios from 'axios';
import React, { useEffect, useState } from 'react';
import config from '../config';

export default function UpdateFraming({ closePopup,fmapid }) {
  const [facultys, setFacultys] = useState([]);
  const [courses, setCourses] = useState([]);
  const [ltps, setLTPS] = useState('');
  const [initialFramingData,setInitialFramingData] = useState({})

  useEffect(() => {
    axios.get(`${config.url}/framedata/${fmapid}`)
        .then((response) => {
            const storedFacultyData = response.data;
            if (storedFacultyData) {
                setFormData(storedFacultyData);
                setInitialFramingData(storedFacultyData);
            }
        })
        .catch((err) => {
            setError(err.message);
        });
});
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
    const { id, value, type, checked } = e.target;
    if (id === 'ccode') {
      const selectedCourse = courses.find(course => course.ccode === value);
      setFormData({ ...formData, [id]: value });
      setLTPS(selectedCourse ? selectedCourse.ltps : '');
    }else if (type === 'checkbox') {
      setFormData(prevData => ({
        ...prevData,
        component: checked
          ? [...prevData.component, value] 
          : prevData.component.filter(component => component !== value) 
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [id]: value
      }));
    }
  };
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const updatedData = {};
        for (const key in formData) {
            if (formData[key] !== initialFramingData[key] && initialFramingData[key] !== '') {
                updatedData[key] = formData[key]; 
            }
        }
        if (Object.keys(updatedData).length !== 0) {
            // There are changes
            updatedData.fmapid = fmapid; // Make sure email is included in the updated data
            const response = await axios.post(`${config.url}/updateframe/${fmapid}`, updatedData);
            setMessage(response.data);
            setError('');
            handleClose();
        } else {
            // No changes
            setMessage("No Changes in Faculty Data");
            setError("");
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
          <h2>Framing Updation Form</h2>
          <form onSubmit={handleSubmit}>
            {message ? <h4 style={{ color: 'green' }}>{message}</h4> : <h4 style={{ color: 'red' }}>{error}</h4>}
            <div>
              <label>Course Code: </label>
              <select id="ccode" onChange={handlechange} value={formData.ccode} required>
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
              <select id='facultyid' onChange={handlechange} value={formData.facultyid} required>
                <option value="">--Select--</option>
                {facultys.map(faculty => (
                  <option key={faculty.facultyid} value={faculty.facultyid}>{faculty.facultyid} - {faculty.fullname}</option>
                ))}
              </select>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {['L', 'T', 'P', 'S'].map(component => (
                    <div key={component} style={{ marginRight: '10px' }}>
                      <input
                        type='checkbox'
                        id={component}
                        value={component}
                        onChange={handlechange}
                        checked={formData.component.includes(component)}
                      />
                      <label htmlFor={component}>{component}</label>
                    </div>
                  ))}
                </div>

            <div>
              <label>Section:</label>
              <input type='number' min={1} max={30} id='section' onChange={handlechange} value={formData.section} required />
            </div>
            <button type='submit'>Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}
