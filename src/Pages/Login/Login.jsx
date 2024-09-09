// import React, { useState } from 'react';
// import './Login.module.scss';

// function Login({ onLogin }) {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [passwordShown, setPasswordShown] = useState(false);

//     const togglePasswordVisibility = () => {
//         setPasswordShown(!passwordShown);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onLogin(); // Call the login function to mark the user as authenticated
//     };

//     return (
//         <div className="container">
//             <div className="welcome-section">
//                 <h1>Welcome to</h1>
//                 <a
//                     href="https://m-avenue.ma/wp-content/uploads/2023/05/Carte-M-Avenue-S-pdf-847x2048.png"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     <img src="images (6).png" alt="M Avenue" title="M Avenue" />
//                 </a>
//                 <p>DASHBOARD</p>
//             </div>

//             <div className="login-section">
//                 <h2>Login</h2>
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="text"
//                         placeholder="Account"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         required
//                     />
//                     <div className="password-container">
//                         <input
//                             type={passwordShown ? 'text' : 'password'}
//                             id="password"
//                             placeholder="Password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             required
//                         />
//                         <button
//                             type="button"
//                             className={passwordShown ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'}
//                             onClick={togglePasswordVisibility}
//                             aria-label="Toggle password visibility"
//                         />
//                     </div>
//                     <button type="submit">Sign in</button>
//                     <a href="/forgot-password">Forgot password?</a>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Login;
