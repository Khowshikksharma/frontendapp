import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import config from '../config';

export default function AddCourses({ closePopup }) {
    const [formData, setFormData] = useState({
        dept: '',
        prog: '',
        ay: '',
        semester: '',
        year: '',
        ccode: '',
        ctitle: '',
        cshortcut: '',
        ltps: '',
        credits: ''
    });

    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${config.url}/insertcourse`, formData);
            if (response.status === 200) {
                setFormData({
                    dept: '',
                    prog: '',
                    ay: '',
                    semester: '',
                    year: '',
                    ccode: '',
                    ctitle: '',
                    cshortcut: '',
                    ltps: '',
                    credits: ''
                });
                setMessage(response.data);
                setError('');
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
                    <h2>Course Registration Form</h2>
                    <form onSubmit={handleSubmit}>
                        {
                            message?<h4 style={{color:'green'}}>{message}</h4>:<h4 style={{color:'red'}}>{error}</h4>
                          }
                            <div>
                              <label>Select Department</label>&nbsp;&nbsp;&nbsp;
                              <select type='text' id="dept" onChange={handleChange} required>
                                      <option value="">--Select--</option>
                                      <option value="CSE(H)">CSE(HONOURS)</option>
                                      <option value="CSE(R)">CSE(REGULARS)</option>
                                      <option value="CSIT">CS&IT</option>
                              </select>
                            </div>
                            <div>
                              <label>Select Program</label>&nbsp;&nbsp;&nbsp;
                              <select type='text' id="prog" onChange={handleChange} required>
                                      <option value="">--Select--</option>
                                      <option value="B.Tech">B.Tech</option>
                                      <option value="M.Tech">M.Tech</option>
                              </select>
                            </div>
                            <div>
                              <label>Select Academic Year</label>
                              <select type='text' id="ay" onChange={handleChange} required>
                                      <option value="">--Select--</option>
                                      <option value="24">2024-25</option>
                                      <option value="23">2023-24</option>
                                      <option value="22">2022-23</option>
                                      <option value="21">2021-22</option>
                              </select>
                            </div>
                            <div>
                              <label>Select Semester</label>
                              <select type='text' id='semester' onChange={handleChange} required>
                                    <option value="">--Select--</option>
                                    <option value="ODD">ODD</option>
                                    <option value="EVEN">EVEN</option>
                              </select>
                            </div>
                            <div>
                              <label>Enter Year</label>
                              <input type="number" id="year" min="1" max="4" onChange={handleChange} required/>
                            </div>
                            <div>
                              <label>Enter Course Code</label>
                              <input type="text" id="ccode" onChange={handleChange} required/>
                            </div>
                            <div>
                              <label>Enter Course Title</label>
                              <input type="text" id="ctitle" onChange={handleChange} required/>
                            </div>
                            <div>
                              <label>Course Shoutcut Title</label>
                              <input type="text" id="cshortcut" onChange={handleChange} required/>
                            </div>
                            <div>
                              <label>LTPS</label>
                              <input type="text" id="ltps" onChange={handleChange} required placeholder="X-X-X-X"/>
                            </div>
                            <div>
                              <label>Credits</label>
                              <input type="number" id="credits"  min="0" max="8" onChange={handleChange} required/>
                            </div>
                            <div>
                              <button type='submit'>Add</button>&nbsp;&nbsp;&nbsp;
                              <button type='reset'>Clear</button>
                            </div>
                        </form>
                    {message && <p style={{ color: 'green' }}>{message}</p>}
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            </div>
        </div>
    );
}
