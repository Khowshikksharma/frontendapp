import React from 'react'
import styles from '../../template.module.css'
import 'react-perfect-scrollbar/dist/css/styles.css'
import PerfectScrollbar from 'react-perfect-scrollbar'
import FacultyMyDeptNav from '../NavBars/FacultyMyDeptNav'

export default function Uploadfiles() {
  return (
    <div>
        <FacultyMyDeptNav/>
        <div className={styles['group100']}>
          <PerfectScrollbar>
            <p>I am in  faculty Uploadfiles</p>
          </PerfectScrollbar>
        </div>
    </div>
  ) 
}