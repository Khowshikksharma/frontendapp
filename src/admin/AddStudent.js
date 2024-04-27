import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import config from '../config';

export default function AddStudent({ closePopup }) {
    const [formData, setFormData] = useState({
        fullname: '',
        dob: '',
        gender: '',
        email: '',
        phno: '',
        fathername: '',
        fatherphno: '',
        mothername: '',
        motherphno: '',
        aadharnumber: '',
        branch: '',
        address: '',
        password: '',
        ay: '',
        role: 'student'
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${config.url}/insertstudent`, formData);
            if (response.status === 200) {
                setFormData({
                    fullname: '',
                    dob: '',
                    gender: '',
                    email: '',
                    phno: '',
                    fathername: '',
                    fatherphno: '',
                    mothername: '',
                    motherphno: '',
                    aadharnumber: '',
                    branch: '',
                    address: '',
                    password: '',
                    ay: '',
                    role: 'student'
                });
            }
            setMessage(response.data);
            setError('');
            handleClose();
        } catch (error) {
            setError(error.response.data);
            setMessage('');
        }
    };

    const handleClose = useCallback(() => {
        closePopup();
    }, [closePopup]);

    useEffect(() => {
        const close = (e) => {
            if (e.keyCode === 27) {
                handleClose();
            }
        };
        window.addEventListener('keydown', close);
        return () => window.removeEventListener('keydown', close);
    }, [handleClose]);

    return (
        <div>
            <div className="popup active">
                <div className="popup-content">
                    <span className="close-btn" onClick={handleClose}>&times;</span>
                    <h2 align='center'>Student Registration Form</h2>
                    {message ? (
                        <h4 align="center" style={{ color: 'green' }}>{message}</h4>
                    ) : (
                        <h4 align="center" style={{ color: 'red' }}>{error}</h4>
                    )}
                    <form align='center' onSubmit={handleSubmit} className="form">
                    <div>
                        <label>Enter your Full Name</label>&nbsp;&nbsp;&nbsp;
                        <input type='text' id='fullname' onChange={handleChange} required/>
                    </div>
                    <div>
                        <label>Date Of Birth</label>&nbsp;&nbsp;&nbsp;
                        <input type='date' id='dob' onChange={handleChange} required/>
                    </div>
                    <div>
                        <label>Gender</label>&nbsp;&nbsp;&nbsp;
                        <select id="gender" onChange={handleChange} required>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <lable>Email</lable>&nbsp;&nbsp;&nbsp;
                        <input type='email' id='email' onChange={handleChange} required/>
                    </div>
                    <div>
                        <label>Phone Number</label>&nbsp;&nbsp;&nbsp;
                        <input type='text' id='phno'  maxLength="10" pattern='[6789][0-9]{9}' onChange={handleChange} required/>
                    </div>
                    <div>
                        <label>Father Name</label>&nbsp;&nbsp;&nbsp;
                        <input type='text' id='fathername' onChange={handleChange} required/>
                    </div>
                    <div>
                        <lable>Father Phone Number</lable>&nbsp;&nbsp;&nbsp;
                        <input type='text' id='fatherphno' maxLength="10" pattern='[6789][0-9]{9}' onChange={handleChange} required/>
                    </div>
                    <div>
                        <lable>Mother Name</lable>&nbsp;&nbsp;&nbsp;
                        <input type='text' id='mothername' onChange={handleChange} required/>
                    </div>
                    <div>
                        <lable>Mother Phone Number</lable>&nbsp;&nbsp;&nbsp;
                        <input type='text' id='motherphno' maxLength="10" pattern='[6789][0-9]{9}' onChange={handleChange} required/>
                    </div>
                    <div>
                        <lable>Aadhar Number</lable>&nbsp;&nbsp;&nbsp;
                        <input type='text' id='aadharnumber' maxLength={12} pattern='[0-9]{12}'onChange={handleChange} required/>
                    </div>
                    <div>
                            <label>Select Branch</label>
                            <select type='text' id="branch" onChange={handleChange} required>
                              <option value="">--Select--</option>
                              <option value="CSE">CSE</option>
                              <option value="CSIT">CSIT</option>
                              <option value="IOT">IOT</option>
                            </select>
                    </div>
                    {/* <div>
                        <lable>10th Hallticket Number</lable>
                        <input type='text' id='tenthid' onChange={handleChange} required/>
                    </div>
                    <div>
                        <lable>10th  Marks (%)</lable>&nbsp;&nbsp;&nbsp;
                        <input type='number' id='tenthmarks' min={0} max={100} onChange={handleChange} required/>
                    </div>
                    <div>
                        <lable>12th Hallticket Number</lable>
                        <input type='text' id='twelvethid' onChange={handleChange} required />
                    </div>
                    <div>
                        <lable>12th  Marks (%)</lable>&nbsp;&nbsp;&nbsp;
                        <input type='number' id='twelvethmarks' min={0} max={100} onChange={handleChange} required/>
                    </div> */}
                    <div>
                    <label>Address</label>&nbsp;&nbsp;&nbsp;
                        <textarea id='address' onChange={handleChange} required></textarea>
                    </div>
                    <div>
                            <label>Select Academic Year</label>
                            <select type='text' id="ay" onChange={handleChange} required>
                              <option value="">--Select--</option>
                              <option value="24">2024-25</option>
                              <option value="23">2023-24</option>
                              <option value="22">2022-23</option>
                            </select>
                    </div>
                    <div>
                        <label>Password</label>&nbsp;&nbsp;&nbsp;
                        <input type='password' id='password' onChange={handleChange} required/>
                    </div>
                    {/* <div>
                        <label>Profile Pic</label>&nbsp;&nbsp;&nbsp;
                        <input type="file" id="profilepic" ref={fileInputRef} onChange={handleFileChange} required/>
                    </div> */}
                    <button type='submit'>Register</button>&nbsp;&nbsp;&nbsp;
                    <button type='reset'>Clear</button>
                </form>
                </div>
            </div>
        </div>
    );
}
