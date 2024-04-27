import React from 'react'
import styles from '../../template.module.css'
import 'react-perfect-scrollbar/dist/css/styles.css'
import FacultyMyDeptNav from '../NavBars/FacultyMyDeptNav'
import {PenLine} from 'lucide-react';

export default function OnlinePeriods() {
  return (
    <div>
        <FacultyMyDeptNav/>
        <div className={styles['group100']}>
          <div style={{left:"1000px"}}>
            <div>
              <h2 align='left'>Online Classes Scheduling
              <br/><button className={styles['addbutton']}>Add Class</button>
              </h2>
            </div>
            <table className='responsive-table' border={1} align="center" style={{ width: 'auto', height: 'auto' , borderRadius:"3px"}}>
                <thead >
                    <tr>
                        <th>Session No.</th>  
                        <th>Session Name</th>                    
                        <th>Topic Taken</th>
                        <th style={{width:"190px"}}>Date Taken</th>
                        <th style={{width:"130px"}}>Hours Taken (in numbers)</th>
                        <th>Link</th>
                        <th>Update</th>
                      </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>1</td>
                      <td>MongoDB</td>
                      <td>CRUD Operations theroy and Commands</td>
                      <td>12-03-2024</td>
                      <td>4</td>
                      <td><a href="https://meet.google.com/oze-bcds-tbv">https://meet.google.com/oze-bcds-tbv</a></td>
                      <td>
                        <button className='button99'><PenLine/></button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>MongoDB</td>
                      <td>CRUD Operations Practicals</td>
                      <td>19-03-2024</td>
                      <td>5</td>
                      <td><a href="https://meet.google.com/oze-bcds-tbv">https://meet.google.com/oze-tbv</a></td>
                      <td>
                        <button className='button99'><PenLine/></button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Domain Naming System</td>
                      <td>DNS and its properties</td>
                      <td>27-03-2024</td>
                      <td>2</td>
                      <td><a href="https://meet.google.com/oze-bcds-tbv">https://meet.google.com/klfkds-bcds-tbv</a></td>
                      <td>
                        <button className='button99'><PenLine/></button>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Node JS</td>
                      <td>Platform, Backend Structuring  in Environment</td>
                      <td>29-03-2024</td>
                      <td>5</td>
                      <td><a href="https://meet.google.com/oze-bcds-tbv">https://meet.google.com/oze-bcdssdfs-34</a></td>
                      <td>
                        <button className='button99'><PenLine/></button>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Express JS</td>
                      <td>Promise, Session Management Theory</td>
                      <td>05-04-2024</td>
                      <td>3</td>
                      <td><a href="https://meet.google.com/oze-bcds-tbv">https://meet.google.com/oze-bc345fg-v</a></td>
                      <td>
                        <button className='button99'><PenLine/></button>
                      </td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
    </div>
  ) 
}