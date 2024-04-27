import React from 'react'
import mylogo from './images/MY LOGO.jpg'
import styles from './template.module.css'
import 'react-perfect-scrollbar/dist/css/styles.css'
import PerfectScrollbar from 'react-perfect-scrollbar'

const Template = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['template']}>
        <div className={styles['group1']}></div>
        <div className={styles['group2']}></div>
        <span className={styles['text']}>
          <span>Call +9108-350-0122</span>
        </span>


        {/* <img
          src="/download11121-fae-200h.png"
          alt="download11121"
          className={styles['download11']}
        />
        <img
          src="/download21122-352-200h.png"
          alt="download21122"
          className={styles['download21']}
        />
        <img
          src="/images1123-uya-200w.png"
          alt="images1123"
          className={styles['images1']}
        /> */}


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
        <div className={styles['frame6']}>
          <div className={styles['men-uitem-variant3']}>
            <span className={styles['text09']}>
              <span>Help</span>
            </span>
          </div>
          <div className={styles['men-uitem-variant31']}>
            <span className={styles['text09']}>
              <span>Contact</span>
            </span>
          </div>
          <div className={styles['men-uitem-variant32']}>
            <span className={styles['text09']}>
              <span>About</span>
            </span>
          </div>
          <div className={styles['men-uitem-variant33']}>
            <span className={styles['text09']}>
              <span>Privacy</span>
            </span>
          </div>
        </div>
        <div className={styles['frame22']}>
            <span className={styles['text17']}>
              <span>DashBoard</span>
            </span>
            <span className={styles['text19']}>
              <span>My Certificates</span>
            </span>
            <span className={styles['text21']}>
              <span>Online Classes</span>
            </span>
            <span className={styles['text23']}>
              <span>My profile</span>
            </span>
            {/* <span className={styles['text25']}>
              <span>Assignments</span>
            </span>
            <span className={styles['text27']}>
              <span>Quizes</span>
            </span>
            <span className={styles['text29']}>
              <span>Materials</span>
            </span> */}
        </div>
        <div className={styles['men-uitem-default']}>
          <span className={styles['text31']}>
            <span>Logout</span>
          </span>
        </div>
        <div className={styles['men-uitem-default1']}>
          <span className={styles['text33']}>
            <span>Time Table</span>
          </span>
        </div>
        <div className={styles['men-uitem-variant2']}>
          <span className={styles['text35']}>
            <span>My Courses</span>
          </span>
        </div>
        <div className={styles['men-uitem-default3']}>
          <span className={styles['text39']}>
            <span>Home</span>
          </span>
        </div>
        <img src={mylogo}  alt='image here' className={styles['previewredirect6']}/>

        <div className={styles['group100']}>
          <PerfectScrollbar>
            {/* Type code here */}
          </PerfectScrollbar>
        </div>
        


      </div>
    </div>
  )
}

export default Template
