import React, {useState} from 'react'
import "../styles/formulario.css"

export default function Formulario() {

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });

      const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', form);
      };
    


  return (
    <div className="register-card">
    <h2>Register</h2>
    <form onSubmit={handleSubmit} className="register-form">

    <div className="form-group">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group full-width">
        <button type="submit" className="register-button">Register</button>
      </div>

    </form>
      
    </div>
  )
}
