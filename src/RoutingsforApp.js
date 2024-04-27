import React from 'react'
import MainHome from './main/MainHome';
import {Routes,Route} from 'react-router-dom'
import Help from './main/HCAP/Help';
import About from './main/HCAP/About';
import Privacy from './main/HCAP/Privacy';
import Contact from './main/HCAP/Contact';
import MainCourses from './main/MainCourses';
import MainFaculty from './main/MainFaculty';

export default function RoutingsforApp({onAdminLogin,onFacultyLogin,onStudentLogin}) {
  return (
    <div>
        <Routes>
            
            <Route path="/" element={<MainHome onAdminLogin={onAdminLogin} onStudentLogin={onStudentLogin} onFacultyLogin={onFacultyLogin}/>} exact />
            <Route path="/home" element={<MainHome onAdminLogin={onAdminLogin} onStudentLogin={onStudentLogin} onFacultyLogin={onFacultyLogin}/>} exact />
            <Route path="/logout" element={<MainHome onAdminLogin={onAdminLogin} onStudentLogin={onStudentLogin} onFacultyLogin={onFacultyLogin}/>} exact/>
            <Route path="/maincourses" element={<MainCourses onAdminLogin={onAdminLogin} onStudentLogin={onStudentLogin} onFacultyLogin={onFacultyLogin}/>} exact />
            <Route path="/mainfaculty" element={<MainFaculty onAdminLogin={onAdminLogin} onStudentLogin={onStudentLogin} onFacultyLogin={onFacultyLogin}/>} exact />

            <Route path="/help" element={<Help/>} exact/>
            <Route path="/about" element={<About/>} exact/>
            <Route path="/privacy" element={<Privacy/>} exact/>
            <Route path="/contact" element={<Contact/>} exact/>

            <Route path='*' element={<MainHome onAdminLogin={onAdminLogin} onStudentLogin={onStudentLogin} onFacultyLogin={onFacultyLogin}/>} exact/> 

        </Routes>
    </div>
  )
}
