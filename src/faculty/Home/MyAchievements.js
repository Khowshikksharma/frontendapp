import React from 'react';
import styles from '../../template.module.css';
import FacultyHomeNav from '../NavBars/FacultyHomeNav';
import medal from '../../images/Medal.png';
import trophy from '../../images/Throphy.png';
import badge from '../../images/Badge.png';

export default function MyAchievements() {
  return (
    <div>
      <FacultyHomeNav />
      <div className={styles['group100']}>
        <div className='framee-1'>
          <div className='framee-5'>
            <div className='framee-5-1'></div>
            <img src={medal} alt='Medal' className='image-2-2' />
            <div className='text-5-1'><h2>0</h2></div>
            <img src={trophy} alt='Trophy' className='image-2-3' />
            <div className='text-5-2'><h2>0</h2></div>
            <img src={badge} alt='Badge' className='image-2-4' />
            <div className='text-5-3'><h2>0</h2></div>
          </div>
        </div>
      </div>
    </div>
  );
}
