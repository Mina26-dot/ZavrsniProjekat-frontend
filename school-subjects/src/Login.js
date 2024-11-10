
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.get('http://localhost:8080/subject/all', {
//         auth: {
//           username,
//           password, 
          
//         }
//       });

//       if (response.status === 200) {
//         localStorage.setItem('username', username);
//         navigate('/subjects');
//       }
//     } catch (error) {
//       console.error('Login error:', error);

//       if (error.response) {
//         if (error.response.status === 401) {
//           setError('Neispravno korisničko ime ili lozinka');
//         } else {
//           setError(`Greška sa serverom: ${error.response.status}`);
//         }
//       } else if (error.request) {
//         setError('Nema odgovora sa servera. Proverite vezu sa internetom.');
//       } else {
//         setError('Greška u konfiguraciji zahteva.');
//       }
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-container">
//         <h2>Prijava</h2>
//         {error && <div className="error-message">{error}</div>}
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             placeholder="Korisničko ime"
//             required
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <input
//             type="password"
//             id="password"
//             name="password"
//             placeholder="Lozinka"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button type="submit">
//             Prijavi se
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;












//===============================================================================================


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setIsLoggedIn, setUserRole }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'admin14993') {
      setIsLoggedIn(true);
      setUserRole('ADMIN');
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userRole', 'ADMIN');
      navigate('/subjects');
    } else if (username === 'nastavnik' && password === 'password2') {
      setIsLoggedIn(true);
      setUserRole('NASTAVNIK');
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userRole', 'NASTAVNIK');
      navigate('/subjects');
    } else if (username === 'ucenik' && password === 'password1') {
      setIsLoggedIn(true);
      setUserRole('UCENIK');
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userRole', 'UCENIK');
      navigate('/subjects');
    } else if (username === 'roditelj' && password === 'password') {
      setIsLoggedIn(true);
      setUserRole('RODITELJ');
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userRole', 'RODITELJ');
      navigate('/subjects');
    } else {
      setError('Neispravno korisničko ime ili lozinka');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Prijava</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Korisničko ime"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Lozinka"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Prijavi se</button>
        </form>
      </div>
    </div>
  );
};

export default Login;