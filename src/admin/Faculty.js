import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from '../template.module.css';
import AdminNavBar from './AdminNavBar';
import AddFaculty from './AddFaculty';
import { Trash2, PenLine } from 'lucide-react';
import UpdateFaculty from './UpdateFaculty';
import config from '../config';

export default function Faculty() {
    const [facultys, setFacultys] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [showPopup1, setShowPopup1] = useState(false);
    const [email, setEmail] = useState();

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const togglePopup1 = () => {
        setShowPopup1(!showPopup1);
    };

    const fetchfacultys = async () => {
        try {
            const response = await axios.get(`${config.url}/viewfaculty`);
            setFacultys(response.data);
        } catch (error) {
            console.error(error.message);
        }
    };

    useEffect(() => {
        fetchfacultys();
    });

    const deletefaculty = async (email) => {
        try {
            await axios.delete(`${config.url}/deletefaculty/${email}`);
            fetchfacultys();
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div>
            <AdminNavBar />
            <div className={styles['frame22']}>
                <Link className={styles['text17']} to="/admindashboard">Dashboard</Link>
                <Link className={styles['text19']} style={{ backgroundColor: 'white', color: 'black', borderRadius: '35px' }} to="/adminfaculty">Faculty</Link>
                <Link className={styles['text21']} to="/adminstudent">Student</Link>
                <Link className={styles['text23']} to="/admincourses">Course</Link>
                <Link className={styles['text25']} to="/adminframing">Framing</Link>
            </div>

            <div className={styles['group100']}>
                <div>
                    <div>
                        <h2 align='left'>Faculty List
                            <br /><button onClick={togglePopup} className={styles['addbutton']}>Add Faculty</button>
                        </h2>
                    </div>
                    {showPopup && (<AddFaculty closePopup={togglePopup} />)}
                    {showPopup1 && (<UpdateFaculty closePopup={togglePopup1} email={email} />)}

                    <table className='responsive-table' border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Faculty ID</th>
                                <th>Full Name</th>
                                <th>DOB</th>
                                <th>Gender</th>
                                <th>Email</th>
                                <th>Phone No.</th>
                                <th>Degree</th>
                                <th>Experience</th>
                                <th>Address</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.isArray(facultys) && facultys.length > 0 ? (
                                facultys.map((faculty, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{faculty.facultyid}</td>
                                        <td style={{ color: '#2400B4' }}>{faculty.fullname}</td>
                                        <td>{faculty.dob}</td>
                                        <td>{faculty.gender}</td>
                                        <td>{faculty.email}</td>
                                        <td>{faculty.phno}</td>
                                        <td>{faculty.degree.join(', ')}</td> 
                                        <td>{faculty.experience}</td>
                                        <td>{faculty.address}</td>
                                        <td>
                                            <button className='button99' onClick={() => { togglePopup1(); setEmail(faculty.email) }}><PenLine /></button>
                                        </td>
                                        <td>
                                            <button onClick={() => deletefaculty(faculty.email)} className='button100'><Trash2 /></button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="11">Data Not Found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
