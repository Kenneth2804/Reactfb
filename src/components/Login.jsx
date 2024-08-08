import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/login.css"

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Password:', password);
        navigate("/calc")
    };

  return (
    <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
        <label htmlFor="email">Email:</label>

        <input 
           type="email" 
           id="email" 
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           required 
        />

        </div>
        <div className="form-group">
        <label htmlFor="password">Password:</label>
       
        <input 
           type="password" 
           id="password" 
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           required 
        />
                </div>

      <button type="submit">Login</button>
      
        </form>
    </div>
  )
}
