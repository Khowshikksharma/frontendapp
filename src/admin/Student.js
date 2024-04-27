import React ,{useState,useEffect}from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import styles from '../template.module.css'
import AdminNavBar from './AdminNavBar'
import AddStudent from './AddStudent'
import { Trash2, PenLine} from 'lucide-react';
import UpdateStudent from './UpdateStudent'
import './tablestyle.css'
import config from '../config';


export default function Student() {
  
  const [students,setStudents] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup1, setShowPopup1] = useState(false);
  const [email,setemail] = useState();

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const togglePopup1 = () => {
    setShowPopup1(!showPopup1);
   };
    const fetchStudents = async () =>{
        try {
            const response = await axios.get(`${config.url}/viewstudents`);
            setStudents(response.data)
        } catch (error) {
            console.error(error.message)
        }
    }

    useEffect(()=>{
        fetchStudents();
    });

    const deletestudent = async (email) => {
        try {
          await axios.delete(`${config.url}/deletestudent/${email}`);
          fetchStudents();
        } catch (error) {
          console.error(error.message);
        }
      }

  return (
    <div>
      <AdminNavBar/>
        <div className={styles['frame22']}>
          <Link className={styles['text17']} to="/admindashboard">Dashboard</Link>
          <Link className={styles['text19']} to="/adminfaculty">Faculty</Link>
          <Link className={styles['text21']} style={{backgroundColor:'white',color:'black',borderRadius:'35px'}} to="/adminstudent">Student</Link>
          <Link className={styles['text23']} to="/admincourses">Course</Link>
          <Link className={styles['text25']} to="/adminframing">Framing</Link>
        </div>

        <div className={styles['group100']}>
          <div style={{left:"1000px"}}>
            <div>
              <h2 align='left'>Students List
              <br/><button onClick={togglePopup} className={styles['addbutton']}>Add Student</button>
              </h2>
            </div>
          
            {showPopup && (<AddStudent closePopup={togglePopup} />)}
            {showPopup1 && (<UpdateStudent closePopup={togglePopup1} email={email}/>)}

            <table className='responsive-table' border={1} align="center" style={{ width: 'auto', height: 'auto' , borderRadius:"3px"}}>
                <thead >
                    <tr>
                        <th>S.No</th>  
                        <th>Student ID</th>                    
                        <th>Full Name</th>
                        <th>DOB</th>
                        <th>Gender</th>
                        <th>Email</th>
                        <th>Aadhar Number</th>
                        <th>Phone No.</th>
                        <th>Branch</th>
                        <th>Update</th>
                        <th>Delete</th>
                        </tr>
                </thead>
                <tbody>
                    {Array.isArray(students) && students.length>0 ?(
                        students.map((student,index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{student.studentid}</td>
                                <td style={{color:'#2400B4'}} >{student.fullname}</td>
                                <td>{student.dob}</td>
                                <td>{student.gender}</td>
                                <td>{student.email}</td>
                                <td>{student.aadharnumber}</td>
                                <td>{student.phno}</td>
                                <td>{student.branch}</td>
                                <td>
                                    <button onClick={()=>{togglePopup1();setemail(student.email)}}  className='button99'><PenLine/></button>
                                </td>
                                <td>
                                    <button onClick={() => deletestudent(student.email)} className='button100'><Trash2/></button>
                                </td>
                                
                            </tr>
                        ))
                    ):(
                        <tr>
                            <td colSpan="11">Data Not Found</td>
                        </tr>
                    )}
                </tbody>
            </table>
          </div>
        </div>
    </div>
  )
}