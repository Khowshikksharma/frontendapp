import React from 'react'
import styles from '../../template.module.css'
import 'react-perfect-scrollbar/dist/css/styles.css'
import PerfectScrollbar from 'react-perfect-scrollbar'
import StudentTimeTableNav from '../NavBars/StudentTimeTableNav'

export default function Exams() {
  return (
    <div>
      {/* <StudentNavBar/>
        <div className={styles['frame22']}>
            <Link className={styles['text17']} to="/classes">Classes</Link>
            <Link className={styles['text19']} style={{backgroundColor:'white',color:'black',borderRadius:'35px'}} to="/exams">Exams</Link>       
        </div>
        <Routes>
            <Route path="/classes" element={<Classes/>} exact/>
            <Route path="/exams" element={<Exams/>} exact/>
        </Routes> */}
        <StudentTimeTableNav/>
        <div className={styles['group100']}>
          <PerfectScrollbar>
            <p>I am in  exams </p>
          </PerfectScrollbar>
        </div>
    </div>
  ) 
}