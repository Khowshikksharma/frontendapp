import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import styles from '../../template.module.css';
import mylogo from '../../images/MY LOGO.jpg';
import HCAPNav from '../../main/HCAP/HCAPNav';
import { useNavigate } from 'react-router-dom';
import FacultyHomeNav from './FacultyHomeNav';
import FacultyMyDeptNav from './FacultyMyDeptNav';
import FacultyTimeTable from './FacultyTimeTable';

export default function FacultyNavBar() {
  const navigate = useNavigate();

  const change1 = () => {
    document.getElementById("home").style.backgroundColor='black';
    document.getElementById("home").style.color='white';
    document.getElementById("home").style.borderRadius='50px';
    document.getElementById("home").style.height='100%';

    document.getElementById("mycourse").style.backgroundColor='';
    document.getElementById("mycourse").style.color='';
    document.getElementById("mycourse").style.borderRadius='';
    document.getElementById("mycourse").style.height='';

    document.getElementById("timetable").style.backgroundColor='';
    document.getElementById("timetable").style.color='';
    document.getElementById("timetable").style.borderRadius='';
    document.getElementById("timetable").style.height='';

    document.getElementById("logout").style.backgroundColor='';
    document.getElementById("logout").style.color='';
    document.getElementById("logout").style.borderRadius='';
    document.getElementById("logout").style.height='';
  };

  const change2 = () => {
    document.getElementById("home").style.backgroundColor='';
    document.getElementById("home").style.color='';
    document.getElementById("home").style.borderRadius='';
    document.getElementById("home").style.height='';

    document.getElementById("mycourse").style.backgroundColor='black';
    document.getElementById("mycourse").style.color='white';
    document.getElementById("mycourse").style.borderRadius='50px';
    document.getElementById("mycourse").style.height='100%';

    document.getElementById("timetable").style.backgroundColor='';
    document.getElementById("timetable").style.color='';
    document.getElementById("timetable").style.borderRadius='';
    document.getElementById("timetable").style.height='';

    document.getElementById("logout").style.backgroundColor='';
    document.getElementById("logout").style.color='';
    document.getElementById("logout").style.borderRadius='';
    document.getElementById("logout").style.height='';
  };

  const change3 = () => {
    document.getElementById("home").style.backgroundColor='';
    document.getElementById("home").style.color='';
    document.getElementById("home").style.borderRadius='';
    document.getElementById("home").style.height='';

    document.getElementById("mycourse").style.backgroundColor='';
    document.getElementById("mycourse").style.color='';
    document.getElementById("mycourse").style.borderRadius='';
    document.getElementById("mycourse").style.height='';

    document.getElementById("timetable").style.backgroundColor='black';
    document.getElementById("timetable").style.color='white';
    document.getElementById("timetable").style.borderRadius='50px';
    document.getElementById("timetable").style.height='100%';

    document.getElementById("logout").style.backgroundColor='';
    document.getElementById("logout").style.color='';
    document.getElementById("logout").style.borderRadius='';
    document.getElementById("logout").style.height='';
  };

  const change4 = () => {
    document.getElementById("home").style.backgroundColor='';
    document.getElementById("home").style.color='';
    document.getElementById("home").style.borderRadius='';
    document.getElementById("home").style.height='';

    document.getElementById("mycourse").style.backgroundColor='';
    document.getElementById("mycourse").style.color='';
    document.getElementById("mycourse").style.borderRadius='';
    document.getElementById("mycourse").style.height='';

    document.getElementById("timetable").style.backgroundColor='';
    document.getElementById("timetable").style.color='';
    document.getElementById("timetable").style.borderRadius='';
    document.getElementById("timetable").style.height='';

    document.getElementById("logout").style.backgroundColor='black';
    document.getElementById("logout").style.color='white';
    document.getElementById("logout").style.borderRadius='50px';
    document.getElementById("logout").style.height='100%';
  };

  const handleLogout = () => {
    localStorage.removeItem('isFacultyLoggedIn');
    localStorage.removeItem('faculty');
    navigate('/home');
    window.location.reload();
  };

  return (
    <div className={styles.template}>
      <div className={styles.group1}></div>
      <div className={styles.group2}></div>
      <span className={styles.text}>
        <span>Call +9108-350-0122</span>
      </span>

      <img src={mylogo} alt='Company Logo' className={styles.previewredirect6} />

      <div className={styles['men-uitem-default3']}>
        <Link className={styles.text39} id='home' onClick={change1} to="/facultyhome/facultydashboard">Home</Link>
      </div>
      <div className={styles['men-uitem-variant2']}>
        <Link className={styles.text35} id='mycourse' onClick={change2} to="/facultymydept/facultymycoursedetails">My Dept</Link>
      </div>
      <div className={styles['men-uitem-default1']}>
        <Link className={styles.text33} id='timetable' onClick={change3} to="/facultytimetable/facultyclasses">Time Table</Link>
      </div>
      <div className={styles['men-uitem-default']}>
        <Link className={styles.text31} id='logout' onClick={() => { change4(); handleLogout(); }} to="/logout">Logout</Link>
      </div>

      <Routes>
        <Route path="/facultyhome/*" element={<FacultyHomeNav />} exact />
        <Route path="/facultymydept/*" element={<FacultyMyDeptNav />} exact />
        <Route path="/facultytimetable/*" element={<FacultyTimeTable />} exact />
      </Routes>

      <HCAPNav />
    </div>
  );
}
