// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Link, Route, useNavigate, useLocation } from 'react-router-dom';
// import { School, Person, Grade, Class as ClassIcon, CalendarToday, Settings } from '@mui/icons-material';
// import IconButton from '@mui/material/IconButton';
// import LogoutIcon from '@mui/icons-material/Logout';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import './App.css';


// import SubjectDetails from './SubjectDetails';
// import AddSubject from './AddSubject';
// import EditSubject from './EditSubject';
// import DeleteSubject from './DeleteSubject';
// import TeacherDetails from './TeacherDetails';
// import AddTeacher from './AddTeacher';
// import EditTeacher from './EditTeacher';
// import DeleteTeacher from './DeleteTeacher';
// import DataFetcher from './DataFetcher';
// import TeachersFetcher from './TeachersFetcher';
// import AddAbsence from './AddAbsence';
// import EditAbsence from './EditAbsence';
// import AbsencesFetcher from './AbsencesFetcher';
// import DeleteAbsence from './DeleteAbsence';
// import AddGrade from './AddGrade';
// import EditGrade from './EditGrade';
// import GradesFetcher from './GradesFetcher';
// import DeleteGrade from './DeleteGrade';
// import AddClass from './AddClass';
// import EditClass from './EditClass';
// import ClassFetcher from './ClassFetcher';
// import DeleteClass from './DeleteClass';
// import AddStudent from './AddStudent';
// import StudentDetails from './StudentDetails';
// import EditStudent from './EditStudent';
// import StudentFetcher from './StudentFetcher';
// import DeleteStudent from './DeleteStudent';
//  import Login from './Login';
// import ProtectedRoute from './ProtectedRoute';
// import ClassDetails from './ClassDetails';
// import GradeDetails from './GradeDetails';
// import AbsenceDetails from './AbsenceDetails';
// import './App.css';

// const Toolbar = ({ onLogout }) => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [anchorEl, setAnchorEl] = useState(null);

//   const shouldShowToolbar = () => {
//     const noToolbarRoutes = ['/', '/login'];
//     return !noToolbarRoutes.includes(location.pathname);
//   };

//   if (!shouldShowToolbar()) return null;

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleLogout = () => {
//     if (onLogout) onLogout();
//     navigate('/login');
//     handleMenuClose();
//   };

//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/subjects">
//             <School /> Predmeti
//           </Link>
//         </li>
//         <li>
//           <Link to="/students">
//             <Person /> Ucenici
//           </Link>
//         </li>
//         <li>
//           <Link to="/grades">
//             <Grade /> Ocene
//           </Link>
//         </li>
//         <li>
//           <Link to="/teachers">
//             <Person /> Nastavnici
//           </Link>
//         </li>
//         <li>
//           <Link to="/absences">
//             <CalendarToday /> Izostanci
//           </Link>
//         </li>
//         <li>
//           <Link to="/classes">
//             <ClassIcon /> Odeljenje
//           </Link>
//         </li>
//         <li>
//           <IconButton onClick={handleMenuOpen} color="inherit">
//             <Settings />

//           </IconButton>
//           <Menu
//             anchorEl={anchorEl}
//             open={Boolean(anchorEl)}
//             onClose={handleMenuClose}
//           >
//             <MenuItem onClick={handleLogout}>
//               <LogoutIcon /> Odjava
//             </MenuItem>
//           </Menu>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userRole, setUserRole] = useState('');

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setUserRole('');
//   };

//   return (
//     <Router>
//       <div>
//         <h1>Elektronski Dnevnik</h1>
//         <Toolbar onLogout={handleLogout} />
//         <Routes>
//           <Route
//             path="/"
//             element={
//               !isLoggedIn ? (
//                 <div>
//                   <Login setIsLoggedIn={setIsLoggedIn} setUserRole={setUserRole} />
//                 </div>
//               ) : (
//                 <div> </div>
//               )
//             }
//           />
//           <Route path="/subjects" element={<DataFetcher />} />
//           <Route path="/subjects/get/:id" element={<SubjectDetails />} />
//           <Route path="/subjects/add" element={<AddSubject />} />
//           <Route path="/subjects/edit/:id" element={<EditSubject />} />
//           <Route path="/subjects/delete/:id" element={<DeleteSubject />} />

//           <Route path="/students" element={<StudentFetcher />} />
//           <Route path="/students/get/:id" element={<StudentDetails />} />
//           <Route path="/students/add" element={<AddStudent />} />
//           <Route path="/students/edit/:id" element={<EditStudent />} />
//           <Route path="/students/delete/:id" element={<DeleteStudent />} />

//           <Route path="/grades" element={<GradesFetcher />} />
//           <Route path="/grades/get/:id" element={<GradeDetails />} />
//           <Route path="/grades/add" element={<AddGrade />} />
//           <Route path="/grades/edit/:id" element={<EditGrade />} />
//           <Route path="/grades/delete/:id" element={<DeleteGrade />} />

//           <Route path="/teachers" element={<TeachersFetcher />} />
//           <Route path="/teachers/get/:id" element={<TeacherDetails />} />
//           <Route path="/teachers/add" element={<AddTeacher />} />
//           <Route path="/teachers/edit/:id" element={<EditTeacher />} />
//           <Route path="/teachers/delete/:id" element={<DeleteTeacher />} />

//           <Route path="/absences" element={<AbsencesFetcher />} />
//           <Route path="/absences/get/:id" element={<AbsenceDetails />} />
//           <Route path="/absences/add" element={<AddAbsence />} />
//           <Route path="/absences/edit/:id" element={<EditAbsence />} />
//           <Route path="/absences/delete/:id" element={<DeleteAbsence />} />

//           <Route path="/classes" element={<ClassFetcher />} />
//           <Route path="/classes/get/:id" element={<ClassDetails />} />
//           <Route path="/classes/add" element={<AddClass />} />
//           <Route path="/classes/edit/:id" element={<EditClass />} />
//           <Route path="/classes/delete/:id" element={<DeleteClass />} />

//           <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUserRole={setUserRole} />} />
//           <Route
//             path="/students/add"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <AddStudent />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/students/edit/:id"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <EditStudent />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/students/delete/:id"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <DeleteStudent />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/grades/add"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <AddGrade />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/grades/edit/:id"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <EditGrade />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/grades/delete/:id"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <DeleteGrade />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/teachers/add"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <AddTeacher />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/teachers/edit/:id"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <EditTeacher />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/teachers/delete/:id"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <DeleteTeacher />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/absences/add"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <AddAbsence />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/absences/edit/:id"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <EditAbsence />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/absences/delete/:id"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <DeleteAbsence />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/classes/add"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <AddClass />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/classes/edit/:id"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <EditClass />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/classes/delete/:id"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <DeleteClass />
//               </ProtectedRoute>
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;



















// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Link } from 'react-router-dom';
// import { School, Person, Grade, Class as ClassIcon, CalendarToday, Settings } from '@mui/icons-material';
// import IconButton from '@mui/material/IconButton';
// import LogoutIcon from '@mui/icons-material/Logout';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import './App.css';

// import SubjectDetails from './SubjectDetails';
// import AddSubject from './AddSubject';
// import EditSubject from './EditSubject';
// import DeleteSubject from './DeleteSubject';
// import TeacherDetails from './TeacherDetails';
// import AddTeacher from './AddTeacher';
// import EditTeacher from './EditTeacher';
// import DeleteTeacher from './DeleteTeacher';
// import DataFetcher from './DataFetcher';
// import TeachersFetcher from './TeachersFetcher';
// import AddAbsence from './AddAbsence';
// import EditAbsence from './EditAbsence';
// import AbsencesFetcher from './AbsencesFetcher';
// import DeleteAbsence from './DeleteAbsence';
// import AddGrade from './AddGrade';
// import EditGrade from './EditGrade';
// import GradesFetcher from './GradesFetcher';
// import DeleteGrade from './DeleteGrade';
// import AddClass from './AddClass';
// import EditClass from './EditClass';
// import ClassFetcher from './ClassFetcher';
// import DeleteClass from './DeleteClass';
// import AddStudent from './AddStudent';
// import StudentDetails from './StudentDetails';
// import EditStudent from './EditStudent';
// import StudentFetcher from './StudentFetcher';
// import DeleteStudent from './DeleteStudent';
// import Login from './Login';
// import ProtectedRoute from './ProtectedRoute';
// import ClassDetails from './ClassDetails';
// import GradeDetails from './GradeDetails';
// import AbsenceDetails from './AbsenceDetails';

// const Toolbar = ({ onLogout }) => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [anchorEl, setAnchorEl] = useState(null);

//   const shouldShowToolbar = () => {
//     const noToolbarRoutes = ['/', '/login'];
//     return !noToolbarRoutes.includes(location.pathname);
//   };

//   if (!shouldShowToolbar()) return null;

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleLogout = () => {
//     if (onLogout) onLogout();
//     navigate('/login');
//     handleMenuClose();
//   };

//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/subjects">
//             <School /> Predmeti
//           </Link>
//         </li>
//         <li>
//           <Link to="/students">
//             <Person /> Ucenici
//           </Link>
//         </li>
//         <li>
//           <Link to="/grades">
//             <Grade /> Ocene
//           </Link>
//         </li>
//         <li>
//           <Link to="/teachers">
//             <Person /> Nastavnici
//           </Link>
//         </li>
//         <li>
//           <Link to="/absences">
//             <CalendarToday /> Izostanci
//           </Link>
//         </li>
//         <li>
//           <Link to="/classes">
//             <ClassIcon /> Odeljenje
//           </Link>
//         </li>
//         <li>
//           <IconButton onClick={handleMenuOpen} color="inherit">
//             <Settings />
//           </IconButton>
//           <Menu
//             anchorEl={anchorEl}
//             open={Boolean(anchorEl)}
//             onClose={handleMenuClose}
//           >

//             <MenuItem onClick={handleLogout}>
//               <LogoutIcon /> Odjava
//             </MenuItem>
//           </Menu>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userRole, setUserRole] = useState('');

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setUserRole('');
//   };

//   return (
//     <Router>
//       <div>
//         <h1>Elektronski Dnevnik</h1>
//         <Toolbar onLogout={handleLogout} />
//         <Routes>
//           <Route
//             path="/"
//             element={
//               !isLoggedIn ? (
//                 <Login setIsLoggedIn={setIsLoggedIn} setUserRole={setUserRole} />
//               ) : (
//                 <div> </div>
//               )
//             }
//           />
//           <Route path="/subjects" element={<DataFetcher userRole={userRole} />} />
//           <Route path="/subjects/get/:id" element={<SubjectDetails userRole={userRole} />} />
//           <Route path="/subjects/add" element={<AddSubject />} />
//           <Route path="/subjects/edit/:id" element={<EditSubject />} />
//           <Route path="/subjects/delete/:id" element={<DeleteSubject />} />

//           <Route path="/students" element={<StudentFetcher userRole={userRole} />} />
//           <Route path="/students/get/:id" element={<StudentDetails userRole={userRole} />} />
//           <Route path="/students/add" element={<AddStudent />} />
//           <Route path="/students/edit/:id" element={<EditStudent />} />
//           <Route path="/students/delete/:id" element={<DeleteStudent />} />

//           <Route path="/grades" element={<GradesFetcher userRole={userRole} />} />
//           <Route path="/grades/get/:id" element={<GradeDetails />} />
//           <Route path="/grades/add" element={<AddGrade />} />
//           <Route path="/grades/edit/:id" element={<EditGrade />} />
//           <Route path="/grades/delete/:id" element={<DeleteGrade />} />

//           <Route path="/teachers" element={<TeachersFetcher userRole={userRole}/>} />
//           <Route path="/teachers/get/:id" element={<TeacherDetails userRole={userRole} />} />
//           <Route path="/teachers/add" element={<AddTeacher />} />
//           <Route path="/teachers/edit/:id" element={<EditTeacher />} />
//           <Route path="/teachers/delete/:id" element={<DeleteTeacher />} />

//           <Route path="/absences" element={<AbsencesFetcher userRole={userRole} />} />
//           <Route path="/absences/get/:id" element={<AbsenceDetails userRole={userRole} />} />
//           <Route path="/absences/add" element={<AddAbsence />} />
//           <Route path="/absences/edit/:id" element={<EditAbsence />} />
//           <Route path="/absences/delete/:id" element={<DeleteAbsence />} />

//           <Route path="/classes" element={<ClassFetcher userRole={userRole} />} />
//           <Route path="/classes/get/:id" element={<ClassDetails />} />
//           <Route path="/classes/add" element={<AddClass />} />
//           <Route path="/classes/edit/:id" element={<EditClass />} />
//           <Route path="/classes/delete/:id" element={<DeleteClass />} />

//           <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUserRole={setUserRole} />} />
//           <Route
//             path="/students/add"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <AddStudent />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/students/edit/:id"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <EditStudent />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/students/delete/:id"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <DeleteStudent />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/grades/add"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <AddGrade />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/grades/edit/:id"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <EditGrade />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/grades/delete/:id"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <DeleteGrade />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/teachers/add"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <AddTeacher />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/teachers/edit/:id"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <EditTeacher />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/teachers/delete/:id"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <DeleteTeacher />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/absences/add"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <AddAbsence />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/absences/edit/:id"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <EditAbsence />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/absences/delete/:id"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <DeleteAbsence />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/classes/add"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <AddClass />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/classes/edit/:id"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <EditClass />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/classes/delete/:id"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <DeleteClass />
//               </ProtectedRoute>
//             }
//           />

//           <Route
//             path="/subjects/get/:id"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <SubjectDetails userRole={userRole} />
//               </ProtectedRoute>
//             }
//           />

// <Route
//   path="/subjects/add"
//   element={
//     <ProtectedRoute allowedRoles={['ADMIN', 'NASTAVNIK']}>
//       <AddSubject />
//     </ProtectedRoute>
//   }
// />

// <Route
//   path="/subjects/edit/:id"
//   element={
//     <ProtectedRoute allowedRoles={['ADMIN', 'NASTAVNIK']}>
//       <EditSubject />
//     </ProtectedRoute>
//   }
// />

// <Route
//   path="/subjects/delete/:id"
//   element={
//     <ProtectedRoute allowedRoles={['ADMIN', 'NASTAVNIK']}>
//       <DeleteSubject />
//     </ProtectedRoute>
//   }
// />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;











































// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Link } from 'react-router-dom';
// import { School, Person, Grade, Class as ClassIcon, CalendarToday, Settings } from '@mui/icons-material';
// import IconButton from '@mui/material/IconButton';
// import LogoutIcon from '@mui/icons-material/Logout';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import './App.css';

// import SubjectDetails from './SubjectDetails';
// import AddSubject from './AddSubject';
// import EditSubject from './EditSubject';
// import DeleteSubject from './DeleteSubject';
// import TeacherDetails from './TeacherDetails';
// import AddTeacher from './AddTeacher';
// import EditTeacher from './EditTeacher';
// import DeleteTeacher from './DeleteTeacher';
// import DataFetcher from './DataFetcher';
// import TeachersFetcher from './TeachersFetcher';
// import AddAbsence from './AddAbsence';
// import EditAbsence from './EditAbsence';
// import AbsencesFetcher from './AbsencesFetcher';
// import DeleteAbsence from './DeleteAbsence';
// import AddGrade from './AddGrade';
// import EditGrade from './EditGrade';
// import GradesFetcher from './GradesFetcher';
// import DeleteGrade from './DeleteGrade';
// import AddClass from './AddClass';
// import EditClass from './EditClass';
// import ClassFetcher from './ClassFetcher';
// import DeleteClass from './DeleteClass';
// import AddStudent from './AddStudent';
// import StudentDetails from './StudentDetails';
// import EditStudent from './EditStudent';
// import StudentFetcher from './StudentFetcher';
// import DeleteStudent from './DeleteStudent';
// import Login from './Login';
// import ProtectedRoute from './ProtectedRoute';
// import ChangePassword from './ChangePassword';
// import ClassDetails from './ClassDetails';
// import GradeDetails from './GradeDetails';
// import AbsenceDetails from './AbsenceDetails';
// import Surveys from './Surveys';
// import Poruke from './Poruke';
// import Forum from './Forum';


// const Toolbar = ({ onLogout }) => {
//   const location = useLocation();
//   const navigate = useNavigate();

  

//   const [anchorEl, setAnchorEl] = useState(null);

//   const shouldShowToolbar = () => {
//     const noToolbarRoutes = ['/', '/login'];
//     return !noToolbarRoutes.includes(location.pathname);
//   };

//   if (!shouldShowToolbar()) return null;

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const handleLogout = () => {
//     if (onLogout) onLogout();
//     navigate('/login');
//     handleMenuClose();
//   };

//   const handleChangePassword = () => {
//     navigate('/change-password');
//     handleMenuClose();
//   };

//   const handleSurveys = () => {
//     navigate('/surveys');
//     handleMenuClose();
//   };

//   const handleLanguageToggle = () => {

//     alert('Prebaci na cirilicu');
//     handleMenuClose();
//   };

//   const handleMessages = () => {
//     navigate('/messages');
//     handleMenuClose();
//   };

//   const handleForum = () => {
//     navigate('/forum');
//     handleMenuClose();
//   };

//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/subjects">
//             <School /> Predmeti
//           </Link>
//         </li>
//         <li>
//           <Link to="/students">
//             <Person /> Ucenici
//           </Link>
//         </li>
//         <li>
//           <Link to="/grades">
//             <Grade /> Ocene
//           </Link>
//         </li>
//         <li>
//           <Link to="/teachers">
//             <Person /> Nastavnici
//           </Link>
//         </li>
//         <li>
//           <Link to="/absences">
//             <CalendarToday /> Izostanci
//           </Link>
//         </li>
//         <li>
//           <Link to="/classes">
//             <ClassIcon /> Odeljenje
//           </Link>
//         </li>
//         <li>
//           <IconButton onClick={handleMenuOpen} color="inherit">
//             <Settings />
//           </IconButton>
//           <Menu
//             anchorEl={anchorEl}
//             open={Boolean(anchorEl)}
//             onClose={handleMenuClose}
//           >
//             <MenuItem onClick={handleChangePassword}

//             >Promeni Lozinku</MenuItem>
//             <MenuItem onClick={handleSurveys}>Ankete</MenuItem>
//             <MenuItem onClick={handleLanguageToggle}>Latinica</MenuItem>
//             <MenuItem onClick={handleMessages}>Poruke</MenuItem> 
//             <MenuItem onClick={handleForum}>Forum</MenuItem> 
//             <MenuItem onClick={handleLogout}>
//               <LogoutIcon /> Odjava
//             </MenuItem>
//           </Menu>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userRole, setUserRole] = useState('');

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setUserRole('');
//   };

//   return (
//     <Router>
//       <div>
//         <h1>Elektronski Dnevnik</h1>
//         <Toolbar onLogout={handleLogout} />
//         <Routes>
//           <Route
//             path="/"
//             element={
//               !isLoggedIn ? (
//                 <Login setIsLoggedIn={setIsLoggedIn} setUserRole={setUserRole} />
//               ) : (
//                 <div> </div>
//               )
//             }
//           />

//           <Route path="/messages" element={<Poruke />} />
//           <Route path="/forum" element={<Forum />} />

//           <Route path="/subjects" element={<DataFetcher userRole={userRole} />} />
//           <Route path="/subjects/get/:id" element={<SubjectDetails userRole={userRole} />} />
//           <Route path="/subjects/add" element={<AddSubject />} />
//           <Route path="/subjects/edit/:id" element={<EditSubject />} />
//           <Route path="/subjects/delete/:id" element={<DeleteSubject />} />


//           <Route path="/students" element={<StudentFetcher userRole={userRole} />} />
//           <Route path="/students/get/:id" element={<StudentDetails userRole={userRole} />} />
//           <Route path="/students/add" element={<AddStudent />} />
//           <Route path="/students/edit/:id" element={<EditStudent />} />
//           <Route path="/students/delete/:id" element={<DeleteStudent />} />

//           <Route path="/grades" element={<GradesFetcher userRole={userRole} />} />
//           <Route path="/grades/get/:id" element={<GradeDetails />} />
//           <Route path="/grades/add" element={<AddGrade />} />
//           <Route path="/grades/edit/:id" element={<EditGrade />} />
//           <Route path="/grades/delete/:id" element={<DeleteGrade />} />

//           <Route path="/teachers" element={<TeachersFetcher userRole={userRole} />} />
//           <Route path="/teachers/get/:id" element={<TeacherDetails userRole={userRole} />} />
//           <Route path="/teachers/add" element={<AddTeacher />} />
//           <Route path="/teachers/edit/:id" element={<EditTeacher />} />
//           <Route path="/teachers/delete/:id" element={<DeleteTeacher />} />

//           <Route path="/absences" element={<AbsencesFetcher userRole={userRole} />} />
//           <Route path="/absences/get/:id" element={<AbsenceDetails userRole={userRole} />} />
//           <Route path="/absences/add" element={<AddAbsence />} />
//           <Route path="/absences/edit/:id" element={<EditAbsence />} />
//           <Route path="/absences/delete/:id" element={<DeleteAbsence />} />

//           <Route path="/classes" element={<ClassFetcher userRole={userRole} />} />
//           <Route path="/classes/get/:id" element={<ClassDetails />} />
//           <Route path="/classes/add" element={<AddClass />} />
//           <Route path="/classes/edit/:id" element={<EditClass />} />
//           <Route path="/classes/delete/:id" element={<DeleteClass />} />

//           <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUserRole={setUserRole} />} />

//           <Route path="/surveys" element={<Surveys />} />


//           <Route

//             path="/change-password"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['RODITELJ', 'UCENIK', 'ADMIN', 'NASTAVNIK']}>
//                 <ChangePassword />
//               </ProtectedRoute>
//             }
//           />

//           <Route
//             path="/students/add"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <AddStudent />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/students/edit/:id"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <EditStudent />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/students/delete/:id"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <DeleteStudent />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/grades/add"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <AddGrade />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/grades/edit/:id"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <EditGrade />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/grades/delete/:id"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <DeleteGrade />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/teachers/add"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <AddTeacher />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/teachers/edit/:id"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <EditTeacher />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/teachers/delete/:id"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <DeleteTeacher />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/absences/add"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <AddAbsence />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/absences/edit/:id"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <EditAbsence />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/absences/delete/:id"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <DeleteAbsence />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/classes/add"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <AddClass />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/classes/edit/:id"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <EditClass />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/classes/delete/:id"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <DeleteClass />
//               </ProtectedRoute>
//             }
//           />

//           <Route
//             path="/subjects/get/:id"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <SubjectDetails userRole={userRole} />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/subjects/add"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <AddSubject />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/subjects/edit/:id"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <EditSubject />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/subjects/delete/:id"
//             element={
//               <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
//                 <DeleteSubject />
//               </ProtectedRoute>
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;




























import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Link } from 'react-router-dom';
import { School, Person, Grade, Class as ClassIcon, CalendarToday, Settings } from '@mui/icons-material';
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './App.css';

import SubjectDetails from './SubjectDetails';
import AddSubject from './AddSubject';
import EditSubject from './EditSubject';
import DeleteSubject from './DeleteSubject';
import TeacherDetails from './TeacherDetails';
import AddTeacher from './AddTeacher';
import EditTeacher from './EditTeacher';
import DeleteTeacher from './DeleteTeacher';
import DataFetcher from './DataFetcher';
import TeachersFetcher from './TeachersFetcher';
import AddAbsence from './AddAbsence';
import EditAbsence from './EditAbsence';
import AbsencesFetcher from './AbsencesFetcher';
import DeleteAbsence from './DeleteAbsence';
import AddGrade from './AddGrade';
import EditGrade from './EditGrade';
import GradesFetcher from './GradesFetcher';
import DeleteGrade from './DeleteGrade';
import AddClass from './AddClass';
import EditClass from './EditClass';
import ClassFetcher from './ClassFetcher';
import DeleteClass from './DeleteClass';
import AddStudent from './AddStudent';
import StudentDetails from './StudentDetails';
import EditStudent from './EditStudent';
import StudentFetcher from './StudentFetcher';
import DeleteStudent from './DeleteStudent';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
import ChangePassword from './ChangePassword';
import ClassDetails from './ClassDetails';
import GradeDetails from './GradeDetails';
import AbsenceDetails from './AbsenceDetails';
import Surveys from './Surveys';
import Poruke from './Poruke';
import Forum from './Forum';
import SubjectsList from './SubjectsList';
import { UserProvider } from './UserContext';

const Toolbar = ({ onLogout }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const shouldShowToolbar = () => {
    const noToolbarRoutes = ['/', '/login'];
    return !noToolbarRoutes.includes(location.pathname);
  };

  if (!shouldShowToolbar()) return null;

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    if (onLogout) onLogout();
    navigate('/login');
    handleMenuClose();
  };

  const handleChangePassword = () => {
    navigate('/change-password');
    handleMenuClose();
  };

  const handleSurveys = () => {
    navigate('/surveys');
    handleMenuClose();
  };

  const handleLanguageToggle = () => {
    alert('Prebaci na cirilicu');
    handleMenuClose();
  };

  const handleMessages = () => {
    navigate('/messages');
    handleMenuClose();
  };

  const handleForum = () => {
    navigate('/forum');
    handleMenuClose();
  };

  const handleSubjectList = () =>{
    navigate('/subjects-list');
    handleMenuClose();
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to="/subjects">
            <School /> Predmeti
          </Link>
        </li>
        <li>
          <Link to="/students">
            <Person /> Ucenici
          </Link>
        </li>
        <li>
          <Link to="/grades">
            <Grade /> Ocene
          </Link>
        </li>
        <li>
          <Link to="/teachers">
            <Person /> Nastavnici
          </Link>
        </li>
        <li>
          <Link to="/absences">
            <CalendarToday /> Izostanci
          </Link>
        </li>
        <li>
          <Link to="/classes">
            <ClassIcon /> Odeljenje
          </Link>
        </li>
        <li>
          <IconButton onClick={handleMenuOpen} color="inherit">
            <Settings />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleChangePassword}>Promeni Lozinku</MenuItem>
            <MenuItem onClick={handleSurveys}>Ankete</MenuItem>
            <MenuItem onClick={handleLanguageToggle}>Latinica</MenuItem>
            <MenuItem onClick={handleMessages}>Poruke</MenuItem> 
            <MenuItem onClick={handleForum}>Forum</MenuItem> 
            <MenuItem onClick={handleSubjectList}>Prvi zadatak</MenuItem> 

            <MenuItem onClick={handleLogout}>
              <LogoutIcon /> Odjava
            </MenuItem>
          </Menu>
        </li>
      </ul>
    </nav>
  );
};

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState('');

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole('');
  };

  return (
    <Router>
      <UserProvider>
        <div>
          {/* <h1>Elektronski Dnevnik</h1> */}
          <Toolbar onLogout={handleLogout} />
          <Routes>
            <Route
              path="/"
              element={
                !isLoggedIn ? (
                  <Login setIsLoggedIn={setIsLoggedIn} setUserRole={setUserRole} />
                ) : (
                  <div> </div>
                )
              }
            />

            <Route path="/messages" element={<Poruke />} />
            <Route path="/forum" element={<Forum />} />

            <Route path="/subjects-list" element={<SubjectsList />} />
            <Route path="/subjects" element={<DataFetcher userRole={userRole} />} />
            <Route path="/subjects/get/:id" element={<SubjectDetails userRole={userRole} />} />
            <Route path="/subjects/add" element={<AddSubject />} />
            <Route path="/subjects/edit/:id" element={<EditSubject />} />
            <Route path="/subjects/delete/:id" element={<DeleteSubject />} />

            <Route path="/students" element={<StudentFetcher userRole={userRole} />} />
            <Route path="/students/get/:id" element={<StudentDetails userRole={userRole} />} />
            <Route path="/students/add" element={<AddStudent />} />
            <Route path="/students/edit/:id" element={<EditStudent />} />
            <Route path="/students/delete/:id" element={<DeleteStudent />} />

            <Route path="/grades" element={<GradesFetcher userRole={userRole} />} />
            <Route path="/grades/get/:id" element={<GradeDetails />} />
            <Route path="/grades/add" element={<AddGrade />} />
            <Route path="/grades/edit/:id" element={<EditGrade />} />
            <Route path="/grades/delete/:id" element={<DeleteGrade />} />

            <Route path="/teachers" element={<TeachersFetcher userRole={userRole} />} />
            <Route path="/teachers/get/:id" element={<TeacherDetails userRole={userRole} />} />
            <Route path="/teachers/add" element={<AddTeacher />} />
            <Route path="/teachers/edit/:id" element={<EditTeacher />} />
            <Route path="/teachers/delete/:id" element={<DeleteTeacher />} />

            <Route path="/absences" element={<AbsencesFetcher userRole={userRole} />} />
            <Route path="/absences/get/:id" element={<AbsenceDetails userRole={userRole} />} />
            <Route path="/absences/add" element={<AddAbsence />} />
            <Route path="/absences/edit/:id" element={<EditAbsence />} />
            <Route path="/absences/delete/:id" element={<DeleteAbsence />} />

            <Route path="/classes" element={<ClassFetcher userRole={userRole} />} />
            <Route path="/classes/get/:id" element={<ClassDetails />} />
            <Route path="/classes/add" element={<AddClass />} />
            <Route path="/classes/edit/:id" element={<EditClass />} />
            <Route path="/classes/delete/:id" element={<DeleteClass />} />

            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUserRole={setUserRole} />} />

            <Route path="/surveys" element={<Surveys />} />

            <Route
              path="/change-password"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['RODITELJ', 'UCENIK', 'ADMIN', 'NASTAVNIK']}>
                  <ChangePassword />
                </ProtectedRoute>
              }
            />

            <Route
              path="/students/add"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
                  <AddStudent />
                </ProtectedRoute>
              }
            />
            <Route
              path="/students/edit/:id"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
                  <EditStudent />
                </ProtectedRoute>
              }
            />
            <Route
              path="/students/delete/:id"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
                  <DeleteStudent />
                </ProtectedRoute>
              }
            />
            <Route
              path="/grades/add"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
                  <AddGrade />
                </ProtectedRoute>
              }
            />
            <Route
              path="/grades/edit/:id"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
                  <EditGrade />
                </ProtectedRoute>
              }
            />
            <Route
              path="/grades/delete/:id"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
                  <DeleteGrade />
                </ProtectedRoute>
              }
            />
            <Route
              path="/teachers/add"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
                  <AddTeacher />
                </ProtectedRoute>
              }
            />
            <Route
              path="/teachers/edit/:id"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
                  <EditTeacher />
                </ProtectedRoute>
              }
            />
            <Route
              path="/teachers/delete/:id"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
                  <DeleteTeacher />
                </ProtectedRoute>
              }
            />
            <Route
              path="/absences/add"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
                  <AddAbsence />
                </ProtectedRoute>
              }
            />
            <Route
              path="/absences/edit/:id"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
                  <EditAbsence />
                </ProtectedRoute>
              }
            />
            <Route
              path="/absences/delete/:id"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
                  <DeleteAbsence />
                </ProtectedRoute>
              }
            />
            <Route
              path="/classes/add"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
                  <AddClass />
                </ProtectedRoute>
              }
            />
            <Route
              path="/classes/edit/:id"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
                  <EditClass />
                </ProtectedRoute>
              }
            />
            <Route
              path="/classes/delete/:id"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
                  <DeleteClass />
                </ProtectedRoute>
              }
            />

            <Route
              path="/subjects/get/:id"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
                  <SubjectDetails userRole={userRole} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/subjects/add"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
                  <AddSubject />
                </ProtectedRoute>
              }
            />
            <Route
              path="/subjects/edit/:id"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
                  <EditSubject />
                </ProtectedRoute>
              }
            />
            <Route
              path="/subjects/delete/:id"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn} role={userRole} allowedRoles={['ADMIN', 'NASTAVNIK']}>
                  <DeleteSubject />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </UserProvider>
    </Router>
  );
};

export default App;