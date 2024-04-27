import axios from 'axios';
import React, { useEffect, useState } from 'react';
import config from '../config';

export default function AddFaculty({ closePopup }) {
    const [formData, setFormData] = useState({
        fullname: '',
        dob: '',
        gender: '',
        email: '',
        phno: '',
        degree: [], 
        branch: '',
        experience: '',
        address: '',
        password: '',
        role: 'faculty'
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { id, value, type, checked } = e.target;
        if (type === 'checkbox') {
            let updatedDegrees = [...formData.degree]; 
            if (checked) {
                updatedDegrees.push(value);
            } else {
                updatedDegrees = updatedDegrees.filter(deg => deg !== value); 
            }
            setFormData({ ...formData, [id]: updatedDegrees }); 
        } else {
            setFormData({ ...formData, [id]: value }); 
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${config.url}/insertfaculty`, formData);
            if (response.status === 200) {
                setFormData({
                    fullname: '',
                    dob: '',
                    gender: '',
                    email: '',
                    phno: '',
                    degree: [],
                    branch: '',
                    experience: '',
                    address: '',
                    password: '',
                    role: 'faculty'
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

    const handleClose = () => {
        closePopup(); 
    };

    useEffect(() => {
        const close = (e) => {
            if(e.keyCode === 27){
                handleClose();
            }
        };
        window.addEventListener('keydown', close);
        return () => window.removeEventListener('keydown', close);
    });

    return (
        <div>
            <div className="popup active">
                <div className="popup-content">
                    <span className="close-btn" onClick={handleClose}>&times;</span>
                    <h2 align='center'>Faculty Registration Form</h2>
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
                            <label>Email</label>&nbsp;&nbsp;&nbsp;
                            <input type='email' id='email' onChange={handleChange} required/>
                        </div>
                        <div>
                            <label>Phone Number</label>&nbsp;&nbsp;&nbsp;
                            <input type='text' id='phno' maxLength={10} pattern='[6789][0-9]{9}' onChange={handleChange} required/>
                        </div>
                        <div>
                            <label>Degree</label>&nbsp;&nbsp;&nbsp;
                            <input type='checkbox' id='degree' value={"B.Tech"} onChange={handleChange}/>B.Tech
                            <input type='checkbox' id='degree' value={"M.Tech"} onChange={handleChange}/>M.Tech
                            <input type='checkbox' id='degree' value={"Bcom"} onChange={handleChange}/>B.Com &nbsp;&nbsp;&nbsp;
                            <input type='text' placeholder='Others' id='degree'/> 
                        </div>
                        <div>
                            <label>Branch</label>&nbsp;&nbsp;&nbsp;
                            <select id="branch" onChange={handleChange} required>
                                <option value="">Select Branch</option>
                                <option value="CSE">CSE</option>
                                <option value="CSIT">CSIT</option>
                                <option value="AIDS">AIDS</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div>
                            <label>Experience</label>&nbsp;&nbsp;&nbsp;
                            <input type='number' id='experience' min={0} max={15} onChange={handleChange} required/>
                        </div>
                        <div>
                            <label>Address</label>&nbsp;&nbsp;&nbsp;
                            <textarea id='address' onChange={handleChange} required></textarea>
                        </div>
                        <div>
                            <label>Password</label>&nbsp;&nbsp;&nbsp;
                            <input type='password' id='password' onChange={handleChange} required/>
                        </div>
                        <button type='submit'>Register</button>&nbsp;&nbsp;&nbsp;
                        <button type='reset'>Clear</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
