import axios from 'axios';
import React, { useEffect, useState, useCallback } from 'react';
import config from '../config';

export default function UpdateCourses({ closePopup, ccode }) {
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
    const [initialCourseData, setInitialCourseData] = useState({});

    useEffect(() => {
        axios.get(`${config.url}/coursedata/${ccode}`)
            .then((response) => {
                const storedCourseData = response.data;
                if (storedCourseData) {
                    setFormData(storedCourseData);
                    setInitialCourseData(storedCourseData);
                }
            })
            .catch((err) => {
                setError(err.message);
            });
    }, [ccode]);

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedData = {};
            for (const key in formData) {
                if (formData[key] !== initialCourseData[key] && initialCourseData[key] !== '') {
                    updatedData[key] = formData[key];
                }
            }
            if (Object.keys(updatedData).length !== 0) {
                updatedData.ccode = ccode;
                const response = await axios.post(`${config.url}/updatecourse/${ccode}`, updatedData);
                setMessage(response.data);
                setError('');
                handleClose();
            } else {
                setMessage("No Changes in Course Data");
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
                    <h2>Course Updation Form</h2>
                    {message && <p style={{ color: 'green' }}>{message}</p>}
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Select Department</label>&nbsp;&nbsp;&nbsp;
                            <select type='text' id="dept" value={formData.dept} readOnly>
                                <option value="">--Select--</option>
                                <option value="CSE(H)">CSE(HONOURS)</option>
                                <option value="CSE(R)">CSE(REGULARS)</option>
                                <option value="CSIT">CS&IT</option>
                            </select>
                        </div>
                        <div>
                            <label>Select Program</label>&nbsp;&nbsp;&nbsp;
                            <select type='text' id="prog" value={formData.prog} readOnly>
                                <option value="">--Select--</option>
                                <option value="B.Tech">B.Tech</option>
                                <option value="M.Tech">M.Tech</option>
                            </select>
                        </div>
                        <div>
                            <label>Select Academic Year</label>
                            <select type='text' id="ay" onChange={handleChange} value={formData.ay} required>
                                <option value="">--Select--</option>
                                <option value="24">2024-25</option>
                                <option value="23">2023-24</option>
                                <option value="22">2022-23</option>
                                <option value="21">2021-22</option>
                            </select>
                        </div>
                        <div>
                            <label>Select Semester</label>
                            <select type='text' id='semester' value={formData.semester} readOnly>
                                <option value="">--Select--</option>
                                <option value="ODD">ODD</option>
                                <option value="EVEN">EVEN</option>
                            </select>
                        </div>
                        <div>
                            <label>Enter Year</label>
                            <input type="number" id="year" min="1" max="4" onChange={handleChange} value={formData.year} required/>
                        </div>
                        <div>
                            <label>Enter Course Code</label>
                            <input type="text" id="ccode" value={formData.ccode} readOnly/>
                        </div>
                        <div>
                            <label>Enter Course Title</label>
                            <input type="text" id="ctitle" onChange={handleChange} value={formData.ctitle} required/>
                        </div>
                        <div>
                            <label>Course Shoutcut Title</label>
                            <input type="text" id="cshortcut" value={formData.cshortcut} onChange={handleChange} required/>
                        </div>
                        <div>
                            <label>LTPS</label>
                            <input type="text" id="ltps" onChange={handleChange} required placeholder="X-X-X-X" value={formData.ltps}/>
                        </div>
                        <div>
                            <label>Credits</label>
                            <input type="number" id="credits" min="0" max="8" onChange={handleChange} value={formData.credits} required/>
                        </div>
                        <div>
                            <button type='submit'>Update</button>&nbsp;&nbsp;&nbsp;
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
