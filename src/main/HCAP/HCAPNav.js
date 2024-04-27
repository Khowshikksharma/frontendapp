import React from 'react'
import styles from '../../template.module.css'
import {Link} from 'react-router-dom'

export default function HCAPNav() {
  return (
    <div>
          <div className={styles['frame6']}>
              <div className={styles['men-uitem-variant3']}>
                <Link className={styles['text09']} id='mycourse'  to="/help">Help</Link>
              </div>
              <div className={styles['men-uitem-variant31']}>
                <Link className={styles['text09']} id='mycourse' to="/contact">Contact</Link>
              </div>
              <div className={styles['men-uitem-variant32']}>
                <Link className={styles['text09']} id='mycourse'  to="/about">About</Link>
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
    </div>
    
  )
}
