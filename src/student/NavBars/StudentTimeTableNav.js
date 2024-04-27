import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import styles from '../../template.module.css'
import Exams from './../TimeTable/Exams';
import Classes from '../TimeTable/Classes';
import StudentNavBar from './StudentNavBar';

export default function StudentTimeTableNav() {
  return (
    <div>
        <StudentNavBar/>

        <div className={styles['frame22']}>
            <Link className={styles['text17']} to="/studenttimetable/classes">Classes</Link>
            <Link className={styles['text19']} to="/studenttimetable/exams">Exams</Link>       
        </div>

        <Routes>
            <Route path="/classes" element={<Classes/>} exact/>
            <Route path="/exams" element={<Exams/>} exact/>
        </Routes>
    </div>
  )
}
