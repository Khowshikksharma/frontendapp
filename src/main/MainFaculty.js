import React, { useState, useEffect } from 'react';
import mylogo from '../images/MYLOGO.jpg';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';
import login from '../images/login.png';
import { Link } from 'react-router-dom';
import eclipse1 from '../images/ecilpse1.png';
import eclipse2 from '../images/ecilpse2.png';
import styles from './MainCourse.module.css';
import './maintablestyle.css';
import Login from './Login';
import axios from 'axios';
import config from '../config';

export default function MainCourses({ onAdminLogin, onStudentLogin, onFacultyLogin }) {
  const [facultys, setFacultys] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const fetchFacultys = async () => {
    try {
      const response = await axios.get(`${config.url}/viewfaculty`);
      setFacultys(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchFacultys();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.group1}></div>
      <div className={styles.group111}></div>

      <div className={styles.group100}>
      {showPopup && <Login closePopup={togglePopup} onAdminLogin={onAdminLogin} onFacultyLogin={onFacultyLogin} onStudentLogin={onStudentLogin} />}
        <div>
          <div className="containers-21">
            <h2>Faculty List</h2>
            <ul className="responsive-table21">
              <li className="table-header21">
                <div className="col col-1">S.No</div>
                <div className="col col-2">Faculty Name</div>
                <div className="col col-3">Gender</div>
                <div className="col col-4">Highest Degree</div>
                <div className="col col-5">Experience</div>
              </li>
              {Array.isArray(facultys) && facultys.length > 0 ? (
                facultys.map((faculty, index) => (
                  <li className="table-row21" key={index}>
                    <div className="col col-1">{index + 1}</div>
                    <div className="col col-2" style={{ color: '#2400B4' }}>{faculty.fullname}</div>
                    <div className="col col-3">{faculty.gender}</div>
                    <div className="col col-4">{faculty.degree}</div>
                    <div className="col col-5">{faculty.experience}</div>
                  </li>
                ))
              ) : (
                <li>
                  <div className="col col-1" colSpan="5">Data Not Found</div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <span className={styles.text}>
        <span>Call +9108-350-0122</span>
      </span>
      <span className={styles.text143}></span>
      <img
        src={facebook}
        alt="Facebook"
        className={styles.download11}
      />
      <img
        src={instagram}
        alt="Instagram"
        className={styles.download21}
      />
      <img
        src={twitter}
        alt="Twitter"
        className={styles.images1}
      />
      <img
        src={login}
        alt="Login"
        className={styles.imageslogin}
      />
      <span className={styles.textlogin}>
        <span onClick={togglePopup}>Login</span>
      </span>

      <div className={styles['group5']}>
        <img src={eclipse1} alt="Ellipse1" className={styles['ellipse1']} />
        <img src={eclipse2} alt="Ellipse2" className={styles['ellipse2']} />
        <span className={styles['text048']}>
          <span>
            <span></span>
            <br></br>
            <span></span>
            <br></br>
            <span>More</span>
            <br></br>
            <span></span>
            <br></br>
            <span>Riper link</span>
            <br></br>
            <span></span>
            <br></br>
            <span>Testimonials</span>
            <br></br>
            <span></span>
            <br></br>
            <span>Founders</span>
            <br></br>
            <span></span>
          </span>
        </span>
        <span className={styles['textquick']}>
          <span>Quick Links</span>
        </span>
        <span className={styles['text073']}>
          <span>
            <span></span>
            <br></br>
            <span></span>
            <br></br>
            <span>LMS</span>
            <br></br>
            <span></span>
            <br></br>
            <span>Enterprises</span>
            <br></br>
            <span></span>
            <br></br>
            <span>Web Manager</span>
            <br></br>
            <span></span>
            <br></br>
            <span>Login Acc.</span>
          </span>
        </span>
        <span className={styles['text096']}>
          <span>
            <span></span>
            <br></br>
            <span></span>
            <br></br>
            <span>Static Pages</span>
            <br></br>
            <span></span>
            <br></br>
            <span>Web Hosting</span>
            <br></br>
            <span></span>
            <br></br>
            <span>Manager</span>
            <br></br>
            <span></span>
            <br></br>
            <span>System Details</span>
          </span>
        </span>
        <span className={styles['text119']}>
          <span>
            <span>Register</span>
            <br></br>
            <span></span>
            <br></br>
            <span>Attendance</span>
            <br></br>
            <span></span>
            <br></br>
            <span>Payments</span>
            <br></br>
            <span></span>
            <br></br>
            <span>Priorities</span>
            <br></br>
            <span></span>
            <br></br>
            <span></span>
          </span>
        </span>
      </div>
      <div className={styles.frame6}>
        <div className={styles['men-uitem-variant3']}>
          <Link className={styles.text09} id='mycourse' to="/help">Help</Link>
        </div>
        <div className={styles['men-uitem-variant31']}>
          <Link className={styles.text09} id='mycourse' to="/contact">Contact</Link>
        </div>
        <div className={styles['men-uitem-variant32']}>
          <Link className={styles.text09} id='mycourse' to="/about">About</Link>
        </div>
        <div className={styles['men-uitem-variant33']}>
          <Link className={styles.text09} id='mycourse' to="/privacy">Privacy</Link>
        </div>
      </div>
      <div className={styles.frame2}>
        <span className={styles.text02}>
          Copyright © 2024 SET EDUCATION TECHNOLOGY PRIVATE LIMITED
          <br />
          All rights reserved
        </span>
      </div>
      <div className={styles['men-uitem-default']}>
        <Link to="/maincourses" className={styles.text31}>Course List</Link>
      </div>
      <div className={styles['men-uitem-default1']}>
        <Link to="/mainfaculty" style={{ backgroundColor: 'black', color: 'white', borderRadius: '40px', width: "120px", height: "75%" }} className={styles.text33}>Faculty List</Link>
      </div>
      <div className={styles['men-uitem-variant2']}>
        <Link to="/" className={styles.text35}>Home</Link>
      </div>
      <img src={mylogo} alt='Logo' className={styles.previewredirect6} />
    </div>
  );
}
