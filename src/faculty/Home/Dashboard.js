import React, { useEffect, useState } from 'react';
import styles from '../../template.module.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import mylogo from '../../images/person.png';
import '../home.css';
import FacultyHomeNav from '../NavBars/FacultyHomeNav';

export default function Dashboard() {
  const [facultyData, setFacultyData] = useState('');

  useEffect(() => {
    const storedFacultyData = localStorage.getItem('faculty');
    if (storedFacultyData) {
      const parsedFacultyData = JSON.parse(storedFacultyData);
      setFacultyData(parsedFacultyData);
    }
  }, []);

  return (
    <div>
      <FacultyHomeNav />
      <div className={styles['group100']}>
        <div className='framee-1'>
          <div className='framee-2'>
            <div className='location-name'>
              <h3 style={{ color: '#3004AD' }}>{facultyData.fullname}</h3>
              <h4 style={{ color: '#3004AD' }}>{facultyData.facultyid}</h4>
            </div>
            <div className='location-details'>
              <h5>E-mail: {facultyData.email}</h5>
              <h5>DOB: {facultyData.dob}</h5>
              <h5>Branch: {facultyData.branch}</h5>
              {facultyData.degree && (
                <h5>Degree: {facultyData.degree.join(',')}</h5>
              )}
            </div>
          </div>
          <div className='framee-2-2'></div>
          <div className='framee-2-1'>
            <img src={mylogo} alt='Profile' className='image-2-1' />
          </div>
          <div className='framee-3'>
            <div className='location-name-1'>
              <h3 style={{ color: '#3004AD' }}>Course he/she teach NAME</h3>
              <h4 style={{ color: '#3004AD' }}>Course ID</h4>
            </div>
            <div className='location-details-1'>
              <h5>Course Branch:</h5>
              <h5>Total Classes taken(in numbers):</h5>
              <h5>Online Periods(in numbers):</h5>
              <h5>Chapters(in numbers):</h5>
              <h5>Course Syllabus:</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
