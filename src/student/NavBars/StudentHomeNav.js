import React from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import styles from '../../template.module.css'
import MyCertificates from '../Home/MyCertificates'
import OnlineClasses from '../Home/OnlineClasses'
import StudentNavBar from './StudentNavBar'
import Dashboard from '../Home/Dashboard'

export default function StudentHomeNav() {
  return (
    <div>
        <StudentNavBar/>

      <div className={styles['frame22']}>
          <Link className={styles['text17']} to="/studenthome/studentdashboard">DashBoard</Link>
          <Link className={styles['text19']} to="/studenthome/studentcertificates">MyCertificates</Link>
          <Link className={styles['text21']} to="/studenthome/studentonlineclasses">Online Classes</Link>Online Classes
          {/* <Link className={styles['text23']} to="/studenthome/myprofile">My Profile</Link>My profile */}
        </div>
        <Routes>
            <Route path="/studentdashboard/*" element={<Dashboard/>} exact/>
            <Route path="/studentcertificates/*" element={<MyCertificates/>} exact/>
            <Route path="/studentonlineclasses/*" element={<OnlineClasses/>} exact/>
            {/* <Route path="/myprofile/*" element={<MyProfile/>} exact/> */}
        </Routes>
    </div>
  )
}
