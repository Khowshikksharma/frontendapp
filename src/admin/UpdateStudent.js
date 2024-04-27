import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import config from '../config';

export default function UpdateStudent({ closePopup, email }) {
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
        role: 'student'
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [initialStudentData, setInitialStudentData] = useState({});

    useEffect(() => {
        axios.get(`${config.url}/studentprofile/${email}`)
            .then((response) => {
                const storedStudentData = response.data;
                if (storedStudentData) {
                    setFormData(storedStudentData);
                    setInitialStudentData(storedStudentData);
                }
            })
            .catch((err) => {
                setError(err.message);
            });
    }, [email]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleClose = useCallback(() => {
        closePopup();
    }, [closePopup]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedData = {};
            for (const key in formData) {
                if (formData[key] !== initialStudentData[key] && initialStudentData[key] !== '') {
                    updatedData[key] = formData[key];
                }
            }
            if (Object.keys(updatedData).length !== 0) {
                updatedData.email = email;
                const response = await axios.post(`${config.url}/updatestudent/${email}`, updatedData);
                setMessage(response.data);
                setError('');
                handleClose();
            } else {

                setMessage("No Changes in Student Data");
                setError("");
                handleClose();
            }
        } catch (error) {
            setError(error.response.data);
            setMessage('');
        }
    };


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
                    <h2 align='center'>Student Updation Form</h2>
                    {message ? (
                        <h4 align="center" style={{ color: 'green' }}>{message}</h4>
                    ) : (
                        <h4 align="center" style={{ color: 'red' }}>{error}</h4>
                    )}
                    <form align='center' onSubmit={handleSubmit} className="form">
                        <div>
                            <label>Enter your Full Name</label>&nbsp;&nbsp;&nbsp;
                            <input type='text' id='fullname' value={formData.fullname} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Date Of Birth</label>&nbsp;&nbsp;&nbsp;
                            <input type='date' id='dob' value={formData.dob} onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Gender</label>&nbsp;&nbsp;&nbsp;
                            <input type="email" id="email" value={formData.gender} readOnly />
                        </div>
                        <div>
                            <lable>Email</lable>&nbsp;&nbsp;&nbsp;
                            <input type="email" id="email" value={formData.email} readOnly />
                        </div>
                        <div>
                            <label>Phone Number</label>&nbsp;&nbsp;&nbsp;
                            <input type='text' id='phno' maxLength="10" value={formData.phno} pattern='[6789][0-9]{9}' onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Father Name</label>&nbsp;&nbsp;&nbsp;
                            <input type='text' id='fathername' value={formData.fathername} onChange={handleChange} required />
                        </div>
                        <div>
                            <lable>Father Phone Number</lable>&nbsp;&nbsp;&nbsp;
                            <input type='text' id='fatherphno' maxLength="10" value={formData.fatherphno} pattern='[6789][0-9]{9}' onChange={handleChange} required />
                        </div>
                        <div>
                            <lable>Mother Name</lable>&nbsp;&nbsp;&nbsp;
                            <input type='text' id='mothername' value={formData.mothername} onChange={handleChange} required />
                        </div>
                        <div>
                            <lable>Mother Phone Number</lable>&nbsp;&nbsp;&nbsp;
                            <input type='text' id='motherphno' maxLength="10" value={formData.motherphno} pattern='[6789][0-9]{9}' onChange={handleChange} required />
                        </div>
                        <div>
                            <lable>Aadhar Number</lable>&nbsp;&nbsp;&nbsp;
                            <input type='text' id='aadharnumber' maxLength={12} value={formData.aadharnumber} pattern='[0-9]{12}' onChange={handleChange} required />
                        </div>
                        <div>
                            <label>Select Branch</label>
                            <select type='text' id="branch" value={formData.branch} onChange={handleChange} required>
                                <option value="">--Select--</option>
                                <option value="CSE">CSE</option>
                                <option value="CSIT">CSIT</option>
                                <option value="IOT">IOT</option>
                            </select>
                        </div>
                        <div>
                            <label>Address</label>&nbsp;&nbsp;&nbsp;
                            <textarea id='address' onChange={handleChange} value={formData.address} required></textarea>
                        </div>
                        <button type='submit'>Update</button>&nbsp;&nbsp;&nbsp;
                    </form>
                </div>
            </div>
        </div>
    );
}
