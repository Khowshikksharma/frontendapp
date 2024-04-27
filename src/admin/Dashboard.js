import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-perfect-scrollbar/dist/css/styles.css';
import AdminNavBar from './AdminNavBar';
import mylogo from '../images/person.png';
import axios from 'axios';
import styles from '../template.module.css';
import './dashboard.css';
import config from '../config';

export default function Dashboard() {
  
  const [adminData, setAdminData] = useState("");
  const [counts, setCounts] = useState(null);

  useEffect(() => {
    const storedAdminData = localStorage.getItem('admin');
    if (storedAdminData) {
      const parsedAdminData = JSON.parse(storedAdminData);
      setAdminData(parsedAdminData);
      fetchCounts();
    }
  }, []);

  const fetchCounts = async () => {
    try {
      const response = await axios.get(`${config.url}/analysis`);
      setCounts(response.data);
    } catch (error) {
      console.error(error.message)
    }
  };

  return (
    <div>
      <AdminNavBar/>
      {
        adminData ? (
          <div>
            <div className={styles['frame22']}>
              <Link className={styles['text17']} style={{backgroundColor:'white',color:'black',borderRadius:'35px'}} to="/admindashboard">Dashboard</Link>
              <Link className={styles['text19']} to="/adminfaculty">Faculty</Link>
              <Link className={styles['text21']} to="/adminstudent">Student</Link>
              <Link className={styles['text23']} to="/admincourses">Course</Link>
              <Link className={styles['text25']} to="/adminframing">Framing</Link>
            </div>
    
            <div className={styles['group100']}>
              <div className='framee1'>
                <img src={mylogo} alt='Admin' className='Img1'/>
                <div className='framee2'>
                  <h2 style={{color:"#2400B4"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Admin</h2>
                  <h3 style={{textAlign:"left"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;E-mail:&nbsp;{adminData.email}</h3>
                  <h3 style={{textAlign:"left"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Password:&nbsp;{adminData.password}</h3>
                </div>
                <div className='framee3'>
                  <h1>Students</h1>
                  <h2 style={{textAlign:"center",color:"#2400B4"}}>{counts && counts.studentCount}</h2>
                </div>
                <div className='framee4'>
                  <h1>Faculty</h1>
                  <h2 style={{textAlign:"center",color:"#2400B4"}}>{counts && counts.facultyCount}</h2>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading counts...</p>
        )
      }
    </div>
  )
}
