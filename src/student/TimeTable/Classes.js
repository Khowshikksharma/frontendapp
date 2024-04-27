import React from 'react'
import styles from '../../template.module.css'
import 'react-perfect-scrollbar/dist/css/styles.css'
import '../studenttimetable.css'
import StudentTimeTableNav from '../NavBars/StudentTimeTableNav'

export default function Classes() {
  return (
    <div>
        {/* <StudentNavBar/>

        <div className={styles['frame22']}>
            <Link className={styles['text17']} style={{backgroundColor:'white',color:'black',borderRadius:'35px'}} to="/classes">Classes</Link>
            <Link className={styles['text19']} to="/exams">Exams</Link>       
        </div>
        <Routes>
            <Route path="/classes" element={<Classes/>} exact/>
            <Route path="/exams" element={<Exams/>} exact/>
        </Routes> */}
        <StudentTimeTableNav/>
        <div className={styles['group100']}>
          <h2>Time Table</h2>
          <div className='Frames-123'>
            <table>
              <tr>
                  <th>Day/Period</th>
                  <th>I<br/>9:30-10:20</th>
                  <th>II<br/>10:20-11:10</th>
                  <th>III<br/>11:10-12:00</th>
                  <th>12:00-12:40</th>
                  <th>IV<br/>12:40-1:30</th>
                  <th>V<br/>1:30-2:20</th>
                  <th>VI<br/>2:20-3:10</th>
                  <th>VII<br/>3:10-4:00</th>
              </tr>
              <tr>
                  <td className="highlight"><b>Monday</b></td>
                  <td>Eng</td>
                  <td>Mat</td>
                  <td>Che</td>
                  <td rowspan="6" className="special"><b>LUNCH</b></td>
                  <td colspan="3" className="special">LAB</td>
                  <td>Phy</td>
              </tr>
              <tr>
                  <td className="highlight"><b>Tuesday</b></td>
                  <td colspan="3" class="special">LAB</td>
                  <td>Eng</td>
                  <td>Che</td>
                  <td>Mat</td>
                  <td className="special">SPORTS</td>
              </tr>
              <tr>
                  <td className="highlight"><b>Wednesday</b></td>
                  <td>Mat</td>
                  <td>Phy</td>
                  <td>Eng</td>
                  <td>Che</td>
                  <td colspan="3">LIBRARY</td>
              </tr>
              <tr>
                  <td className="highlight"><b>Thursday</b></td>
                  <td>Phy</td>
                  <td>Eng</td>
                  <td>Che</td>
                  <td colspan="3" className="special">LAB</td>
                  <td>Mat</td>
              </tr>
              <tr>
                  <td className="highlight"><b>Friday</b></td>
                  <td colspan="3" class="special">LAB</td>
                  <td>Mat</td>
                  <td>Che</td>
                  <td>Eng</td>
                  <td>Phy</td>
              </tr>
              <tr>
                  <td className="highlight"><b>Saturday</b></td>
                  <td>Eng</td>
                  <td>Che</td>
                  <td>Mat</td>
                  <td colspan="3">SEMINAR</td>
                  <td className="special">SPORTS</td>
              </tr>
            </table>
          </div>
        </div>
    </div>
  ) 
}