import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import School from './school/School';
import Attendance from './school/components/attendance/Attendance';
import Class from './school/components/class/Class';
import Dashboard from './school/components/dashboard/Dashboard';
import Examinations from './school/components/examinations/Examinations';
import Notice from "./school/components/notice/Notice";
import Schedule from "./school/components/schedule/Schedule";
import Students from './school/components/students/Students';
import SchoolManagement from "./school/components/schoolManage/SchoolManagement"; // This is the component you need to modify
import Subjects from "./school/components/subjects/Subjects";
import Teachers from "./school/components/teachers/Teachers";

import Client from "./client/Client";
import Home from "./client/components/home/Home";
import Login from "./client/components/login/Login";   
import Register from "./client/components/register/Register";
import About from "./client/components/about/About";
import Courses from "./client/components/courses/Courses";

import Teacher from "./teacher/Teacher";
import TeacherDetails from "./teacher/components/teacher details/TeacherDetails";
import ScheduleTeacher from "./teacher/components/schedule/ScheduleTeacher";
import AttendanceTeacher from "./teacher/components/attendance/AttendanceTeacher";
import ExaminationsTeacher from "./teacher/components/examinations/ExaminationsTeacher";
import NoticeTeacher from "./teacher/components/notice/NoticeTeacher";
import Student from "./student/Student";
import StudentDetails from "./student/components/student details/StudentDetails";
import ScheduleStudent from "./student/components/schedule/ScheduleStudent";
import AttendanceStudent from "./student/components/attendance/AttendanceStudent";
import NoticeStudent from "./student/components/notice/NoticeStudent";
import ExaminationsStudent from "./student/components/examinations/ExaminationsStudent";


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        {/* SCHOOL ROUTE */}
        <Route path='school' element={<School/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='dashboard' element={<Dashboard/>}/>
          <Route path='attendance' element={<Attendance/>}/>
          <Route path='class' element={<Class/>}/>
          <Route path='examinations' element={<Examinations/>}/>
          <Route path='notice' element={<Notice/>}/>
          <Route path='schedule' element={<Schedule/>}/>
          <Route path='students' element={<Students/>}/> 
          <Route path='school' element={<SchoolManagement/>}/>
          <Route path='subjects' element={<Subjects/>}/>
          <Route path='teachers' element={<Teachers/>}/> 
        </Route>

        {/* CLIENT */}
        <Route path='/' element={<Client/>}>
          <Route index element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='courses' element={<Courses/>}/>

        </Route>

        {/* TEACHER */}
        <Route path="teacher" element={<Teacher/>}>
          <Route index element={<TeacherDetails/>}/>
          <Route path="schedule" element={<ScheduleTeacher/>}/>
          <Route path="attendance" element={<AttendanceTeacher/>}/>
          <Route path="examinations" element={<ExaminationsTeacher/>}/>
          <Route path="notice" element={<NoticeTeacher/>}/>
        </Route>

        {/* STUDENT */}
        <Route path="student" element={<Student/>}>
          <Route index element={<StudentDetails/>}/>
          <Route path="schedule" element={<ScheduleStudent/>}/>
          <Route path="attendance" element={<AttendanceStudent/>}/>
          <Route path="examinations" element={<ExaminationsStudent/>}/>
          <Route path="notice" element={<NoticeStudent/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;