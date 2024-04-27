import React from 'react'
import styles from '../../template.module.css'
import 'react-perfect-scrollbar/dist/css/styles.css'
import PerfectScrollbar from 'react-perfect-scrollbar'
import StudentMyCoursesNav from '../NavBars/StudentMyCoursesNav'

export default function Uploads() {
  return (
    <div>
        <StudentMyCoursesNav/>
      <div className={styles['group100']}>
          <PerfectScrollbar>
            <p>I am in Course Details</p>
          </PerfectScrollbar>
        </div>
    </div>
    
  )
}
