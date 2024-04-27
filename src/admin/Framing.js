import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import styles from '../template.module.css';
import Dashboard from './Dashboard';
import Faculty from './Faculty';
import Student from './Student';
import Course from './Course';
import AdminNavBar from './AdminNavBar';
import axios from 'axios';
import AddFraming from './AddFraming';
import { Trash2, PenLine} from 'lucide-react';
import UpdateFraming from './UpdateFraming';
import config from '../config';

export default function Framing() {
  const [framing, setFraming] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup1, setShowPopup1] = useState(false);
  const [fmapid,setFmapid] = useState()


  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const togglePopup1 = () => {
    setShowPopup1(!showPopup1);
  };

  const fetchFraming = async () => {
    try {
      const response = await axios.get(`${config.url}/viewfcmapping`);
      setFraming(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchFraming();
  });

  const deleteframing = async(fmapid) =>{
    try {
      await axios.delete(`${config.url}/deletemapping/${fmapid}`)
      fetchFraming()
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div>
      <AdminNavBar />
      <div className={styles['frame22']}>
        <Link className={styles['text17']} to="/admindashboard">
          Dashboard
        </Link>
        <Link className={styles['text19']} to="/adminfaculty">
          Faculty
        </Link>
        <Link className={styles['text21']} to="/adminstudent">
          Student
        </Link>
        <Link className={styles['text23']} to="/admincourses">
          Course
        </Link>
        <Link
          className={styles['text25']}
          style={{ backgroundColor: 'white', color: 'black', borderRadius: '35px' }}
          to="/adminframing"
        >
          Framing
        </Link>
      </div>

      <Routes>
        <Route path="/admindashboard" element={<Dashboard />} exact />
        <Route path="/adminfaculty" element={<Faculty />} exact />
        <Route path="/adminstudent" element={<Student />} exact />
        <Route path="/adminframing" element={<Framing />} exact />
        <Route path="/admincourses" element={<Course />} exact />
      </Routes>

      <div className={styles['group100']}>
        <div>
          <div>
            <h2 align="left">
              Framing List
              <br />
              <button onClick={togglePopup} className={styles['addbutton']}>
                Map the Course
              </button>
            </h2>
          </div>
          {showPopup && <AddFraming closePopup={togglePopup} />}
          {showPopup1 && <UpdateFraming closePopup={togglePopup1} fmapid={fmapid}/>}

          <table className="responsive-table" border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Course Code</th>
                <th>Course Title</th>
                <th>Faculty ID</th>
                <th>Faculty Name</th>
                <th>Component</th>
                <th>Section</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(framing) && framing.length > 0 ? (
              framing.map((frame, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{frame.ccode}</td>
                  <td>{frame.ctitle}</td>
                  <td>{frame.facultyid}</td>
                  <td>{frame.fullname}</td>
                  <td>
                    {frame.component.map((component, idx) => (
                      <span key={idx}>
                        {component === 'L'
                          ? 'Lecture'
                          : component === 'T'
                          ? 'Tutorial'
                          : component === 'P'
                          ? 'Practical'
                          : component === 'S'
                          ? 'Skill'
                          : component}
                        {idx < frame.component.length - 1 && ', '}
                      </span>
                    ))}
                  </td>
                  <td>{frame.section}</td>
                  <td>
                      <button onClick={()=>{togglePopup1();setFmapid(frame.fmapid)}}  className='button99'><PenLine/></button>
                  </td>
                  <td>
                      <button onClick={()=>deleteframing(frame.fmapid)} className='button100'><Trash2/></button>
                  </td>
                </tr>
              ))
              ):(
                <tr>
                  <td colSpan="9">Data Not Found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
