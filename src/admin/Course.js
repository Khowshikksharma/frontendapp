import React, { useEffect, useState } from 'react'
import AdminNavBar from './AdminNavBar'
import styles from '../template.module.css'
import {Link} from 'react-router-dom'
import { Trash2, PenLine} from 'lucide-react';
import axios from 'axios'
import AddCourses from './AddCourses'
import UpdateCourses from './UpdateCourses';
import config from '../config';

export default function Course() {
  const [courses,setCourses] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup1, setShowPopup1] = useState(false);
  const [ccode,setCcode] = useState();

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const togglePopup1 = () => {
    setShowPopup1(!showPopup1);
   };

    const fetchcourses = async () =>{
        try {
            const response = await axios.get(`${config.url}/viewcourses`);
            setCourses(response.data)
        } catch (error) {
            console.error(error.message)
        }
    }
    const deletecourse = async (ccode) => {
        try {
          await axios.delete(`${config.url}/deletecourse/${ccode}`);
          fetchcourses();
        } catch (error) {
          console.error(error.message);
        }
    }

    useEffect(()=>{
        fetchcourses();
    });
  return (  
    <div>
        <AdminNavBar/>
        <div className={styles['frame22']}>
          <Link className={styles['text17']} to="/admindashboard">Dashboard</Link>
          <Link className={styles['text19']} to="/adminfaculty">Faculty</Link>
          <Link className={styles['text21']} to="/adminstudent">Student</Link>
          <Link className={styles['text23']} style={{backgroundColor:'white',color:'black',borderRadius:'35px'}}to="/admincourses">Course</Link>
          <Link className={styles['text25']} to="/adminframing">Framing</Link>
        </div>

        <div className={styles['group100']}>
          <div>
            <div>
              <h2 align='left'>Courses List
              <br/><button onClick={togglePopup} className={styles['addbutton']}>Add Course</button>
              </h2>
            </div>
            {showPopup && (<AddCourses closePopup={togglePopup} />)}
            {showPopup1 && (<UpdateCourses closePopup={togglePopup1} ccode={ccode}/>)}
            <table className='responsive-table' border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Course Code</th>
                        <th>Course Title</th>
                        <th>Course Shrt.</th>
                        <th>LTPS</th>
                        <th>Credits</th>
                        <th>Academic Year</th>
                        <th>Year</th>
                        <th>Department</th>
                        <th>Semester</th>
                        <th>Update</th>
                        <th>Delete</th>
                        </tr>
                </thead>
                <tbody>
                    {Array.isArray(courses) && courses.length>0 ?(
                        courses.map((course,index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{course.ccode}</td>
                                <td style={{color:'#2400B4'}} >{course.ctitle}</td>
                                <td>{course.cshortcut}</td>
                                <td>{course.ltps}</td>
                                <td>{course.credits}</td>
                                <td>{course.ay}</td>
                                <td>{course.year}</td>
                                <td>{course.dept}</td>
                                <td>{course.semester}</td>
                                <td>
                                    <button  className='button99' onClick={()=>{togglePopup1();setCcode(course.ccode)}}><PenLine/></button>
                                </td>
                                <td>
                                    <button onClick={() => deletecourse(course.ccode)} className='button100'><Trash2/></button>
                                </td>
                                
                            </tr>
                        ))
                    ):(
                        <tr>
                            <td colSpan="12">Data Not Found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>
    </div>
  )
}