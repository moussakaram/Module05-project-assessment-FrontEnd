import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 


const Login = () => {
  const navigate = useNavigate(); 

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.id]: e.target.value,
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
       const response = await axios.post('http://localhost:8000/api/user/login', credentials);
   
       if (response.data.user) {
         localStorage.setItem('userData', JSON.stringify(response.data.user));
   
         const userRole = response.data.user.role;
         console.log(userRole);
         if (userRole === 'user') {
           navigate('/');
         } else if (userRole === 'admin') {
           navigate('/admin');
         }
   
         console.log('Login Successful', response.data);
       } else {
         console.error('Login Error: Unexpected response format', response);
       }
    } catch (error) {
       console.error('Login Error', error.response ? error.response.data : error.message);
    }
   };
  
    return (
      <div className="container mt-5">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
        <label htmlFor="email" className="form-label">
            Email
        </label>
        <input
            type="text"
            className="form-control"
            id="email"  
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
        />
        </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  };
  
  export default Login;
  