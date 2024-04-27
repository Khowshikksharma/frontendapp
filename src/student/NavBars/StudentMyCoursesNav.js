import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import styles from '../../template.module.css'
import CourseRegistration from './../MyCourses/CourseRegistration';
import Materials from './../MyCourses/Materials';
import Attendance from '../MyCourses/Attendance';
import Uploads from '../MyCourses/Uploads';
import StudentNavBar from './StudentNavBar';


export default function StudentMyCoursesNav() {
  return (
    <div>
        <StudentNavBar/>
        <div className={styles['frame22']}>
            <Link className={styles['text17']} to="/studentmycourses/courseregistration">Course Registration</Link>          
            <Link className={styles['text19']} to="/studentmycourses/uploads">Courses Details</Link>
            <Link className={styles['text21']} to="/studentmycourses/materials">Materials</Link>
            <Link className={styles['text23']} to="/studentmycourses/attendance">Attendance</Link>
        </div>
        <Routes>
            <Route path="/courseregistration/*" element={<CourseRegistration/>} exact/>
            <Route path="/materials/*" element={<Materials/>} exact/>
            <Route path="/attendance/*" element={<Attendance/>} exact/>
            <Route path="/uploads/*" element={<Uploads/>} exact/>
        </Routes>
    </div>
  )
}
