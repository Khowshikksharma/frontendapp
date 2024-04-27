import React, { useState } from 'react';
import mylogo from '../images/MYLOGO.jpg';
import mainimage from '../images/mainimage.jpeg';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';
import login from '../images/login.png';
import pic1 from '../images/pic1.png';
import pic2 from '../images/pic2.png';
import pic3 from '../images/pic3.png';
import { Routes, Route, Link } from 'react-router-dom';
import picture from '../images/Picture 1.png';
import uncle from '../images/uncle.png';
import eclipse1 from '../images/ecilpse1.png';
import eclipse2 from '../images/ecilpse2.png';
import styles from './MainHome.module.css';
import Login from './Login';
import Help from './HCAP/Help';
import About from './HCAP/About';
import Privacy from './HCAP/Privacy';
import Contact from './HCAP/Contact';

export default function MainHome({ onAdminLogin, onStudentLogin, onFacultyLogin }) {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className={styles['container']}>
      <div className={styles['group1']}></div>
      <img src={mainimage} alt="Main" className={styles['group2']} />
      {showPopup && <Login closePopup={togglePopup} onAdminLogin={onAdminLogin} onFacultyLogin={onFacultyLogin} onStudentLogin={onStudentLogin} />}

      <span className={styles['text']}>
        <span>Call +9108-350-0122</span>
      </span>
      <span className={styles['text143']}></span>
      <img src={facebook} alt="Facebook" className={styles['download11']} />
      <img src={instagram} alt="Instagram" className={styles['download21']} />
      <img src={twitter} alt="Twitter" className={styles['images1']} />
      <img src={login} alt="Login" className={styles['imageslogin']} />
      <span className={styles['textlogin']}>
        <span onClick={togglePopup}>Login</span>
      </span>

      <img src={picture} alt="Picture1" className={styles['imagespicture1']} />
      <img src={picture} alt="Picture2" className={styles['imagespicture2']} />
      <img src={picture} alt="Picture3" className={styles['imagespicture3']} />
      <img src={pic1} alt="Pic1" className={styles['imagespic1']} />
      <img src={pic2} alt="Pic2" className={styles['imagespic2']} />
      <img src={pic3} alt="Pic3" className={styles['imagespic3']} />

      <div className={styles['frame1']}>
        <div className={styles['maskgroup']}>
          <div className={styles['frame11']}></div>
        </div>
        <span className={styles['text022']}>
          <span>TESTIMONIALS</span>
        </span>
        <img src={uncle} alt="Uncle" className={styles['kl-chancellor1']} />
        <span className={styles['text024']}>
          <span>Dr. S.S Mantha</span>
        </span>
        <span className={styles['text026']}>
          <span>
            <span></span>
            <br></br>
            <span>Chancellor, Koneru Lakshmaiah Education Foundation</span>
          </span>
        </span>
        <span className={styles['text031']}>
          <span>
            He works as an Adjunct Professor of the National Institute of
            Advanced Studies, Bengaluru and also as Emeritus Professor, VJTI.
            He is a former Chairman of the All India Council for Technical
            Education (AICTE) and has served as President National Board of
            Accreditation. He served as Chancellor of the KL University for a
            period of three years and as Pro-Vice-Chancellor of the SNDT
            Women&apos;s University, Mumbai also for three years. He has
            implemented several initiatives which promoted transparency and
            accountability.
          </span>
        </span>
      </div>
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
      <div className={styles['frame6']}>
        <div className={styles['men-uitem-variant3']}>
          <Link className={styles['text09']} id='mycourse' to="/help">Help</Link>
        </div>
        <div className={styles['men-uitem-variant31']}>
          <Link className={styles['text09']} id='mycourse' to="/contact">Contact</Link>
        </div>
        <div className={styles['men-uitem-variant32']}>
          <Link className={styles['text09']} id='mycourse' to="/about">About</Link>
        </div>
        <div className={styles['men-uitem-variant33']}>
          <Link className={styles['text09']} id='mycourse' to="/privacy">Privacy</Link>
        </div>
      </div>
      <div className={styles['frame2']}>
        <span className={styles['text02']}>
          <span>
            <span>
              Copyright © 2024 SET EDUCATION TECHNOLOGY PRIVATE LIMITED
            </span>
            <br></br>
            <span>All rights reserved</span>
            <br></br>
            <span></span>
          </span>
        </span>
      </div>
      <div className={styles['men-uitem-default']}>
        <Link to="/maincourses" className={styles['text31']}>Course List</Link>
      </div>
      <div className={styles['men-uitem-default1']}>
        <Link to="/mainfaculty" className={styles['text33']}>Faculty List</Link>
      </div>
      <div className={styles['men-uitem-variant2']}>
        <Link to="/" className={styles['text35']}>Home</Link>
      </div>
      <img src={mylogo} alt='Logo' className={styles['previewredirect6']} />

      <Routes>
        <Route path="/help" element={<Help />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/privacy" element={<Privacy />} exact />
        <Route path="/contact" element={<Contact />} exact />
      </Routes>
    </div>
  );
}
