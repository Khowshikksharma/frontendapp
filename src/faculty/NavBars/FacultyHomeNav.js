import React from 'react'
import {Link,Routes,Route} from 'react-router-dom'
import styles from '../../template.module.css'
import FacultyNavBar from './FacultyNavBar'
import Dashboard from '../Home/Dashboard'
import MyAchievements from '../Home/MyAchievements'

export default function FacultyHomeNav() {
  return (
    <div>
      <FacultyNavBar/>
      <div className={styles['frame22']}>
          <Link className={styles['text17']} to="/facultyhome/facultydashboard">Dashboard</Link>
          <Link className={styles['text19']} to="/facultyhome/facultymyachievements">MyAchivements</Link>
        </div>
        <Routes>
            <Route path="/facultydashboard" element={<Dashboard/>} exact/>
            <Route path="/facultymyachievements" element={<MyAchievements/>} exact/>
        </Routes>
    </div>
  )
}
