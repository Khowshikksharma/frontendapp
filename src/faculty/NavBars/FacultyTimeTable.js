import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import styles from '../../template.module.css'
import FacultyNavBar from './FacultyNavBar'
import Classes from './../TimeTable/Classes';

export default function FacultyTimeTable() {
  return (
    <div>
      <FacultyNavBar/>
      <div className={styles['frame22']}>
          <Link className={styles['text17']} to="/facultytimetable/facultyclasses">Classes</Link>
        </div>
      <Routes>
        <Route path='/facultyclasses/*' element={<Classes/>} exact/>
      </Routes>
    </div>
  )
}
