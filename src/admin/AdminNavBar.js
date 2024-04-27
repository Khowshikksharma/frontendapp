import React from 'react';
import HCAPNav from '../main/HCAP/HCAPNav';
import { Routes, Route, Link } from 'react-router-dom';
import styles from '../template.module.css';
import Dashboard from './Dashboard';
import Faculty from './Faculty';
import Student from './Student';
import Framing from './Framing';
import Course from './Course';
import mylogo from '../images/MY LOGO.jpg';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useNavigate } from 'react-router-dom';

export default function AdminNavBar() {
  const navigate = useNavigate();

  const change4 = () => {
    document.getElementById("logout").style.backgroundColor = 'black';
    document.getElementById("logout").style.color = 'white';
    document.getElementById("logout").style.borderRadius = '50px';
    document.getElementById("logout").style.height = '100%';
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('admin');
    navigate('/home');
    window.location.reload();
  };

  return (
    <div>
      <div className={styles['template']}>
        <div className={styles['group1']}></div>
        <div className={styles['group2']}></div>
        <span className={styles['text']}>
          <span>Call +9108-350-0122</span>
        </span>

        <img src={mylogo} alt='My Logo' className={styles['previewredirect6']} />

        <div className={styles['men-uitem-default']}>
          <Link className={styles['text31']} id='logout' onClick={() => { change4(); handleLogout(); }} to="/logout">Logout</Link>
        </div>
        <div className={styles['frame22']}>
          <Link className={styles['text17']} to="/admindashboard">Dashboard</Link>
          <Link className={styles['text19']} to="/adminfaculty">Faculty</Link>
          <Link className={styles['text21']} to="/adminstudent">Student</Link>
          <Link className={styles['text23']} to="/admincourses">Course</Link>
          <Link className={styles['text25']} to="/adminframing">Framing</Link>
        </div>

        <Routes>
          <Route path="/admindashboard/*" element={<Dashboard />} exact />
          <Route path="/adminfaculty/*" element={<Faculty />} exact />
          <Route path="/adminstudent/*" element={<Student />} exact />
          <Route path="/adminframing/*" element={<Framing />} exact />
          <Route path="/admincourses/*" element={<Course />} exact />
          {/* <Route path="/logout" element={<orgmain/>} exact/> */}
        </Routes>

        <HCAPNav />
      </div>
    </div>
  );
}
