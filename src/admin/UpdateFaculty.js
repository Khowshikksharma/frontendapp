import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import config from '../config';

export default function UpdateFaculty({ closePopup, email }) {
    const [formData, setFormData] = useState({
        fullname: '',
        dob: '',
        gender: '',
        email: '',
        phno: '',
        degree: '',
        branch: '',
        experience: '',
        address: '',
        role: 'faculty'
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [initialFacultyData, setInitialFacultyData] = useState({});

    useEffect(() => {
        axios.get(`${config.url}/facultyprofile/${email}`)
            .then((response) => {
                const storedFacultyData = response.data;
                if (storedFacultyData) {
                    setFormData(storedFacultyData);
                    setInitialFacultyData(storedFacultyData);
                }
            })
            .catch((err) => {
                setError(err.message);
            });
    }, [email]);
    
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedData = {};
            for (const key in formData) {
                if (formData[key] !== initialFacultyData[key] && initialFacultyData[key] !== '') {
                    updatedData[key] = formData[key]; 
                }
            }
            if (Object.keys(updatedData).length !== 0) {
                updatedData.email = email; 
                const response = await axios.post(`${config.url}/updatefaculty/${email}`, updatedData);
                setMessage(response.data);
                setError('');
                handleClose();
            } else {
                setMessage("No Changes in Faculty Data");
                setError("");
                handleClose();
            }
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
            if(e.keyCode === 27){
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
                    <h2 align='center'>Faculty Updation Form</h2>
                    {message ? (
                        <h4 align="center" style={{ color: 'green' }}>{message}</h4>                    
                    ) : (
                        <h4 align="center" style={{ color: 'red' }}>{error}</h4>
                    )}
                   <form align='center' onSubmit={handleSubmit} className="form">
                            <div>
                                <label>Enter your Full Name</label>&nbsp;&nbsp;&nbsp;
                                <input type='text' id='fullname' onChange={handleChange} value={formData.fullname} required/>
                            </div>
                            <div>
                                <label>Date Of Birth</label>&nbsp;&nbsp;&nbsp;
                                <input type='date' id='dob' onChange={handleChange} value={formData.dob} required/>
                            </div>
                            <div>
                                <label>Gender</label>&nbsp;&nbsp;&nbsp;
                                <select id="gender" value={formData.gender} readOnly>
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label>Email</label>&nbsp;&nbsp;&nbsp;
                                <input type='email' id='email' value={formData.email} readOnly/>
                            </div>
                            <div>
                                <label>Phone Number</label>&nbsp;&nbsp;&nbsp;
                                <input type='text' id='phno' maxLength={10} pattern='[6789][0-9]{9}' value={formData.phno} onChange={handleChange} required/>
                            </div>
                            <div>
                                <label>Degree</label>&nbsp;&nbsp;&nbsp;
                                {/* <select id="degree" onChange={handleChange} value={formData.degree}  required>
                                    <option value="">Select Degree</option>
                                    <option value="B.Tech">B.Tech</option>
                                    <option value="M.Tech">M.Tech</option>
                                    <option value="B.COm">B.Com</option>
                                    <option value="other">Others</option>
                                </select>
                                <br/> */}
                                <input type='text' placeholder='Others' value={formData.degree} id='degree' readOnly/> 
                            </div>
                            <div>
                                <label>Branch</label>&nbsp;&nbsp;&nbsp;
                                <select id="branch" onChange={handleChange} value={formData.branch} required>
                                    <option value="">Select Branch</option>
                                    <option value="CSE">CSE</option>
                                    <option value="CSIT">CSIT</option>
                                    <option value="AIDS">AIDS</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label>Experience</label>&nbsp;&nbsp;&nbsp;
                                <input type='number' id='experience' min={0} max={15} onChange={handleChange} value={formData.experience} required/>
                            </div>
                            <div>
                                <label>Address</label>&nbsp;&nbsp;&nbsp;
                                <textarea id='address' onChange={handleChange} value={formData.address} required></textarea>
                            </div>
                            <button type='submit'>Update</button>&nbsp;&nbsp;&nbsp;
                            {/* <button type='reset'>Clear</button> */}
                        </form>
                </div>
            </div>
        </div>
    );
}
