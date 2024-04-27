import React, { useEffect, useRef, useState } from 'react';
import styles from '../../template.module.css';
import { Chart } from 'chart.js/auto';
import '../studenthome.css';
import mylogo from '../../images/person.png';
import StudentHomeNav from '../NavBars/StudentHomeNav';

export default function Dashboard() {
  const [studentData, setStudentData] = useState('');
  const chartRef = useRef(null);

  useEffect(() => {
    const storedStudentData = localStorage.getItem('student');
    if (storedStudentData) {
      const parsedStudentData = JSON.parse(storedStudentData);
      setStudentData(parsedStudentData);
    }
  }, []);

  useEffect(() => {
    const ctx = chartRef.current?.getContext('2d');
    if (ctx) {
      let currentChart = null; // Variable to store the chart instance

      if (chartRef.current && chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      currentChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['1 Jan', '7 Jan', '15 Jan', '23 Jan', '2 Feb', '9 Feb', '15 Feb', '22 Feb', '1 Mar'],
          datasets: [{
            label: 'Performance Levels',
            data: [45, 95, 107, 120, 125, 156, 180, 202, 212, 212, 250],
            backgroundColor: 'blue',
            borderColor: 'blue',
            borderWidth: 2,
            fill: false,
          }]
        },
        options: {
          scales: {
            x: {
              grid: {
                color: 'rgba(0, 0, 0, 0.4)',
                lineWidth: 1,
              }
            },
            y: {
              grid: {
                color: 'rgba(0, 0, 0, 0.5)',
                lineWidth: 1,
              },
            }
          }
        }
      });

      // Save the chart instance to the ref
      if (chartRef.current) {
        chartRef.current.chart = currentChart;
      }

      // Clean up function to destroy the chart instance when component unmounts
      return () => {
        if (currentChart) {
          currentChart.destroy();
        }
      };
    }
  }, []);

  return (
    <div>
      <StudentHomeNav />
      <div className={styles['group100']}>
        <div className='framee100'>
          <div className='framee300'>
            <div className='location-name-100'>
              <h4 style={{ color: "#3004AD" }}>{studentData.fullname}</h4>
              <h5 style={{ color: "#3004AD" }}>{studentData.studentid}</h5>
            </div>
            <div className='location-details-100'>
              <h5>Gender: {studentData.gender}</h5>
              <h5>Branch:  {studentData.branch}</h5>
              <h5>E-mail: {studentData.email}</h5>
              <h5>Phone Number: {studentData.phno}</h5>
              <h5>Father Name: {studentData.fathername}</h5>
            </div>
          </div>
          <div className='framee200'>
            <img src={mylogo} alt='My Logo' className='Img1-100' />
          </div>
          <div className='framee400'>
            <div className="chart-container">
              <canvas ref={chartRef} className="chart-canvas" />
            </div>
            <div>
              <h3>Student Progress Graph for Every Week</h3>
              <h5 style={{ color: "blue" }}>x-dates & y-improvement</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
